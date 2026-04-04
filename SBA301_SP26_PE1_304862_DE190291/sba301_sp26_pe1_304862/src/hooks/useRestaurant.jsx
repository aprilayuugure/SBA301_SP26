import { useCallback, useReducer } from "react";
import { restaurantReducer, restaurantInitialState } from "../reducers/RestaurantReducer";
import CategoryService from "../services/CategoryService";
import RestaurantService from "../services/RestaurantService";
import {
  beginRestaurantListSearch,
  isLatestRestaurantListSearch,
} from "../utils/restaurantListSearchSeq";

export function useRestaurant() {
  const [state, dispatch] = useReducer(restaurantReducer, restaurantInitialState);

  const handleFieldChange = (field, value) => {
    dispatch({
      type: "FIELD_CHANGE",
      field,
      payload: value,
    });
  };

  const handleFilterChange = (field, value) => {
    dispatch({
      type: "FILTER_CHANGE",
      field,
      payload: value,
    });
  };

  const resetForm = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  const setErrors = (payload) => {
    dispatch({
      type: "SET_ERRORS",
      payload: payload || {},
    });
  };

  const getAllCategories = useCallback(async () => {
    try {
      const res = await CategoryService.getAllCategories();

      const list = Array.isArray(res.data) ? res.data : [];
      dispatch({
        type: "SET_CATEGORIES",
        payload: list,
      });

      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load categories" },
      });
      return false;
    }
  }, [dispatch]);

  const searchRestaurants = useCallback(async (params) => {
    const seq = beginRestaurantListSearch();
    try {
      const res = await RestaurantService.searchRestaurants(params);
      if (!isLatestRestaurantListSearch(seq)) {
        return false;
      }
      dispatch({
        type: "SET_RESTAURANTS_PAGE",
        payload: res.data,
      });

      return true;
    } catch (err) {
      if (!isLatestRestaurantListSearch(seq)) {
        return false;
      }
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load list" },
      });

      return false;
    }
  }, [dispatch]);

  const goToPage = useCallback(
    (nextPage) =>
      searchRestaurants({
        ...state.filter,
        page: nextPage,
        size: state.pagination.size,
        sortBy: "restaurantName",
      }),
    [searchRestaurants, state.filter, state.pagination.size],
  );

  const reloadList = useCallback(
    () =>
      searchRestaurants({
        ...state.filter,
        page: state.pagination.page,
        size: state.pagination.size,
        sortBy: "restaurantName",
      }),
    [searchRestaurants, state.filter, state.pagination.page, state.pagination.size],
  );

  const getRestaurantById = async (id) => {
    try {
      const res = await RestaurantService.getRestaurantById(id);

      dispatch({
        type: "SET_RESTAURANT",
        payload: res.data,
      });

      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load details" },
      });

      return false;
    }
  };

  const addRestaurant = async (data) => {
    dispatch({ type: "CLEAR_ERRORS" });
    try {
      const res = await RestaurantService.addRestaurant(data);
      dispatch({
        type: "ADD_RESTAURANT",
        payload: res.data,
      });

      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Addition failed" },
      });
      return false;
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      await RestaurantService.deleteRestaurant(id);
      dispatch({
        type: "DELETE_RESTAURANT",
        payload: id,
      });

      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Deletion failed" },
      });
      return false;
    }
  };

  return {
    state,
    handleFieldChange,
    handleFilterChange,
    resetForm,
    setErrors,
    getAllCategories,
    searchRestaurants,
    goToPage,
    reloadList,
    getRestaurantById,
    addRestaurant,
    deleteRestaurant,
  };
}
