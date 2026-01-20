export const initialState = {
    isAuthenticated: false,
    user: {
        username: '',
        password: ''
    },

    error: null
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
                error: null
            };
        
        case 'LOGIN_FAILURE': 
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload
            }
        
        case 'LOGOUT':
            return initialState;

        default: 
            return state;
    }
}