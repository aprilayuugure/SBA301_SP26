export const loginInitialState = {
    isAuthenticated: false,
    user: {
        username: '',
        password: ''
    },

    errors: {}
};

export function loginReducer(state, action) {
    switch (action.type)
    {
        case 'FIELD_CHANGE':
            return {
                ...state, 
                user: {
                    ...state.user,
                    [action.field]: action.value
                }
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                errors: {}
            };
        
        case 'LOGIN_FAILURE': 
            return {
                ...state,
                isAuthenticated: false,
                errors: action.payload
            }
        
        case 'LOGOUT':
            return loginInitialState;

        default: 
            return state;
    }
}