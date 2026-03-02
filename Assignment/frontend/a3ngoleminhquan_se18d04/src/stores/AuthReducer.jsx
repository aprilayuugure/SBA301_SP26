export const initialState = {
    loginForm: {
        emailAddress: "",
        password: ""
    },

    registerForm: {
        customerFullName: "",
        telephone: "",
        emailAddress: "",
        customerBirthday: "",
        password: ""
    },

    user: null,
    token: null,
    errors: {},
    generalError: ""
}

export function authReducer(state, action) {
    switch (action.type) {
        case "FIELD_CHANGE": 
            return {
                ...state,
                [action.form]: {
                    ...state[action.form],
                    [action.field]: action.value
                }
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                errors: {},
                generalError: ""
            };

        case "LOGIN_FAILED": {
            return {
                ...state,
                errors: action.payload.general ? {} : action.payload,
                generalError: action.payload.general || ""
            };
        };
        
        case "REGISTER_SUCCESS": {
            return {
                ...state,
                errors: {},
                generalError: ""
            }
        };

        case "REGISTER_FAILED": {
            return {
                ...state,
                errors: action.payload.general ? {} : action.payload,
                generalError: action.payload.general || ""
            };
        };

        case "CLEAR_ERRORS":
            return {
                ...state,
                errors: {},
                generalError: ""
            }

        case "LOGOUT":
            return initialState;

        default: return state;
    }
}