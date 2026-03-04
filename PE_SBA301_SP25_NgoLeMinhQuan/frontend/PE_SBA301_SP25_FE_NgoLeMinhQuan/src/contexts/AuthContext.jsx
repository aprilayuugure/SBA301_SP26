import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer, initialState } from "../stores/AuthReducer";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

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

    const handleFieldChange = (form, field, value) => {
        dispatch({
            type: "FIELD_CHANGE",
            form,
            field,
            value
        });
    };

    const login = async (loginForm) => {
        dispatch({ type: "CLEAR_ERRORS" });

        try {
            const res = await axios.post(
                "http://localhost:8080/auth/login",
                loginForm
            );

            const data = res.data;

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data));

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: data
            });

            return true;

        } catch (error) {
            dispatch({
                type: "LOGIN_FAILED",
                payload: error.response?.data
            });
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider value={{ state, handleFieldChange, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}