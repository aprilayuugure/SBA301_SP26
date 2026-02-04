export const userInitialState = {
    users: [],
    user: {
        accountName: '',
        accountEmail: '',
        accountRole: 2,
        accountPassword: ''
    },

    errors: ""
};

export function userReducer(state, action) {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.field]: action.value
                },

                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            };

        case 'SET_ERRORS': 
            return {
                ...state, 
                errors: action.payload
            };

        case 'GET_USERS': 
            return {
                ...state,
                users: action.payload,
                errors: {}
            }

        case 'ADD_USER': 
            return {
                ...state,
                users: [...state.users, action.payload],
                user: {...userInitialState.user},
                errors: {}
            };
        
        case 'UPDATE_USER': 
            return {
                ...state,
                users: state.users.map(u => u.accountId === action.payload.accountId ? action.payload : u),
                user: {...userInitialState.user},
                errors: {}
            }
            
        case 'DELETE_USER': 
            return {
                ...state,
                users: state.users.filter(u => u.accountId !== action.payload.accountId)
            }

        default: return state;
    }
} 