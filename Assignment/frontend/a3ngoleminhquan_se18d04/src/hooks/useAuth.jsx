import axios from "axios";
import { authReducer, initialState } from "../stores/AuthReducer.jsx";
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleFieldChange = (form, field, value) => {
        dispatch({
            type: "FIELD_CHANGE", 
            form, 
            field,
            value
        });
    };

    useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: JSON.parse(storedUser)
            });
        }
    }, []);

    const login = async () => {
    dispatch({ type: "CLEAR_ERRORS" });

    try {
        const res = await axios.post(
            "http://localhost:8080/auth/login",
            state.loginForm
        );

        const data = res.data;

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        });

        if (data.role === "ROLE_STAFF") {
            navigate("/");
        } else {
            navigate("/profile");
        }

    } catch (error) {
        dispatch({
            type: "LOGIN_FAILED",
            payload: error.response?.data
        });
    }
};

    const register = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/auth/register",
                state.registerForm
            );

            dispatch({
                type: "REGISTER_SUCCESS"
            });

            navigate("/login");
        }
        catch (error) {
            dispatch({
                type: "REGISTER_FAILED",
                payload: error.response?.data
            })
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    };

    return {
        state, 
        handleFieldChange,
        login,
        register,
        logout
    }
}