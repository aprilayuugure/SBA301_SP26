import { useReducer } from "react";
import { shoesReducer, shoesInitialState } from "../reducers/ShoesReducer";
import ShoesCategoryService from "../services/ShoesCategoryService";
import ShoesService from "../services/ShoesService";

const listQuery = (state, page) => ({
  ...state.filter,
  page: page ?? state.pagination.page,
  size: state.pagination.size,
  sortBy: "shoesId",
  direction: "asc",
});

export function useShoes() {
  const [state, dispatch] = useReducer(shoesReducer, shoesInitialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "FIELD_CHANGE", field, payload: value });
  };

  const handleFilterChange = (field, value) => {
    dispatch({ type: "FILTER_CHANGE", field, payload: value });
  };

  const resetAddForm = () => dispatch({ type: "RESET_NEW_SHOES" });

  const setErrors = (payload) =>
    dispatch({ type: "SET_ERRORS", payload: payload || {} });

  const getAllCategories = async () => {
    try {
      const res = await ShoesCategoryService.getAllCategories();
      dispatch({ type: "SET_SHOES_CATEGORIES", payload: res.data });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load categories" },
      });
      return false;
    }
  };

  const searchShoes = async (params) => {
    try {
      const res = await ShoesService.searchShoes(params);
      dispatch({ type: "SET_SHOES_PAGE", payload: res.data });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load list" },
      });
      return false;
    }
  };

  const goToPage = (nextPage) => searchShoes(listQuery(state, nextPage));

  const reloadList = () => searchShoes(listQuery(state, state.pagination.page));

  const getShoesById = async (id) => {
    try {
      const res = await ShoesService.getShoesById(id);
      dispatch({ type: "SET_SHOES", payload: res.data });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Cannot load details" },
      });
      return false;
    }
  };

  const addShoes = async (data) => {
    dispatch({ type: "CLEAR_ERRORS" });
    try {
      const res = await ShoesService.addShoes(data);
      dispatch({ type: "ADD_SHOES", payload: res.data });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Save failed" },
      });
      return false;
    }
  };

  const deleteShoes = async (id) => {
    try {
      await ShoesService.deleteShoes(id);
      dispatch({ type: "DELETE_SHOES", payload: id });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERRORS",
        payload: err.response?.data || { general: "Delete failed" },
      });
      return false;
    }
  };

  return {
    state,
    handleFieldChange,
    handleFilterChange,
    resetAddForm,
    setErrors,
    getAllCategories,
    searchShoes,
    goToPage,
    reloadList,
    getShoesById,
    addShoes,
    deleteShoes,
  };
}
