import { useReducer } from "react";
import { restaurantReducer, restaurantInitialState } from "../reducers/RestaurantReducer";
import CategoryService from "../services/CategoryService";
import RestaurantService from "../services/RestaurantService";

const listQuery = (state, pageNumber) => ({
  ...state.filter,
  page: state.pagination.pageNumber,
  size: state.pagination.pageSize,
  sortBy: "restaurantName",
});

export function useRestaurant() {
  const [state, dispatch] = useReducer(restaurantReducer, restaurantInitialState);

  const handleFieldChange = (field, value) => {
    dispatch({ 
        type: "FIELD_CHANGE", 
        field, 
        payload: value 
    });
  };

  const handleFilterChange = (field, value) => {
    dispatch({ 
        type: "FILTER_CHANGE", 
        field, 
        payload: value 
    });
  };

  const resetForm = () => {
    dispatch({ 
        type: "RESET_FORM" 
    });
  };

  const setErrors = (payload) => {
    dispatch({ 
        type: "SET_ERRORS", 
        payload: payload || {} 
    });
  };

  const getAllCategories = async () => {
    try {
      const res = await CategoryService.getAllCategories();

      dispatch({ 
        type: "SET_CATEGORIES", 
        payload: res.data 
      });
      
      return true;
    } 
    catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load categories" },
      });
      return false;
    }
  };

  const searchRestaurants = async (params) => {
    try {
      const res = await RestaurantService.searchRestaurants(params);
      dispatch({ 
        type: "SET_RESTAURANTS_PAGE", 
        payload: res.data 
      });

      return true;
    } 
    catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load list" },
      });

      return false;
    }
  };

  const goToPage = (nextPage) => searchRestaurants(listQuery(state, nextPage));

  const reloadList = () => searchRestaurants(listQuery(state, state.pagination.page));

  const getRestaurantById = async (id) => {
    try {
      const res = await RestaurantService.getRestaurantById(id);
      
      dispatch({ 
        type: "SET_RESTAURANT", 
        payload: res.data 
      });
      
      return true;
    } 
    catch (err) {
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
        payload: res.data 
      });
      
      return true;
    } 
    catch (err) {
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
        payload: id 
      });

      return true;
    } 
    catch (err) {
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
