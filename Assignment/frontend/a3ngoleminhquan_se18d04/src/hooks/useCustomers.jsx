import { useReducer } from "react";
import api from "../api/axiosInstance";
import { customerInitialState, CustomerReducer } from "../stores/CustomerReducer";

export function useCustomers() {
    const [state, dispatch] = useReducer(CustomerReducer, customerInitialState);

    const getAll = async () => {
        try {
            const res = await api.get("/customers");

            dispatch({
                type: "SET_CUSTOMERS",
                payload: res.data
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Cannot load customers" }
            });
        }
    }

    const getById = async (id) => {
        try {
            const res = await api.get(`/customers/${id}`);

            dispatch({
                type: "SET_CUSTOMER_TYPE",
                payload: res.data
                });
            }
            catch (error) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: error.response?.data || { general: "Cannot load customers" }
            });
        }
    };

    return {
        state,
        getAll,
        getById
    }
}