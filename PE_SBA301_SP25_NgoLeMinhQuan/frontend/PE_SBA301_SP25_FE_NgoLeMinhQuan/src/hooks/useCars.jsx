import { useReducer, useState } from "react";
import api from "../api/axiosInstance";
import { carInitialState, CarReducer } from "../stores/CarReducer";


export function useCars() {
    const [state, dispatch] = useReducer(CarReducer, carInitialState);
    const [errors, setErrors] = useState({});

    const handleFieldChange = (field, value) => {
        dispatch({
            type: "FIELD_CHANGE", 
            field,
            value
        });
    };

    const getAll = async () => {
        try {
            const res = await api.get("/cars");

            dispatch({
                type: "SET_CARS",
                payload: res.data
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Cannot load cars" }
            });
        }
    }

    const getById = async (id) => {
        try {
            const res = await api.get(`/cars/${id}`);

            dispatch({
                type: "SET_CAR",
                payload: res.data
                });
            }
            catch (error) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: error.response?.data || { general: "Cannot load cars" }
            });
        }
    };

    const getAllCountries = async () => {
        try {
            const res = await api.get("/countries");

            dispatch({
                type: "SET_COUNTRIES",
                payload: res.data
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload:error.response?.data ? error.response.data : { general: "Cannot load countries" }
            });
        }
    }

        const add = async(id, data) => {
        dispatch({ type: "CLEAR_ERRORS" });

        try {
            await api.post("/cars", data);

            return true;
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data ? error.response.data : { general: "Addition failed" }
            });

            return false;
        }
    }

    const update = async(id, data) => {
        dispatch({ type: "CLEAR_ERRORS" });

        try {
            await api.put(`/cars/${id}`, data);

            return true;
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data ? error.response.data : { general: "Update failed" }
            });

            return false;
        }
    }

    const remove = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this car?");

        if (!isConfirmed) return;

        try {
            await api.delete(`/cars/${id}`);

            dispatch({
                type: "DELETE_SUCCESS",
                payload: id
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Deletion failed" }
            });
        }
    }

    return {
        state,
        handleFieldChange,
        getAll,
        getAllCountries,
        getById,
        add,
        update,
        remove,
    }
}