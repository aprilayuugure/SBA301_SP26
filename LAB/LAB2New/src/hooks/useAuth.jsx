import { useNavigate } from "react-router-dom";
import { validateLogin } from "../features/auth/LoginValidation";

export const useAuth = (state, dispatch, accounts) => {
    const navigate = useNavigate();

    const login = () => {
        const error = validateLogin(state.user, accounts);

        if (error) dispatch({ type: "LOGIN_FAILURE", payload: error })
        else 
        {   
            dispatch({ type: "LOGIN_SUCCESS" });
            navigate(`/orchids`)
        }
    };

    const handleFieldChange = (field, value) =>
    {   
        dispatch({
            type: 'FIELD_CHANGE',
            field: field,
            value: value
        });
    };

    return {
        login,
        handleFieldChange,
        error: state.error,
        user: state.user
    };
}

export default useAuth;