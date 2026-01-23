import { useNavigate } from "react-router-dom";
import { validateLogin } from "../features/auth/LoginValidation";

export const useAuth = (state, dispatch, accounts) => {
    const navigate = useNavigate();

    const login = () => {
        const errors = validateLogin(state.user, accounts);

        if (Object.keys(errors).length > 0) dispatch({ type: "LOGIN_FAILURE", payload: errors })
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
        errors: state.errors,
        user: state.user
    };
}

export default useAuth;