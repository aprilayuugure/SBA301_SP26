export const categoryInitialState = {
    categories: [],
    category: {
        categoryName: "",
        categoryDescription: "",
        parentCategory: null,
        isActive: true
    },
    isModalOpen: false,
    modalMode: "ADD",
    errors: {}
};

export function categoryReducer(state, action) {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                category: {
                    ...state.category,
                    [action.field]: action.value
                },

                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            };

        case 'OPEN_ADD_MODAL': 
            return {
                ...state,
                category: {
                    categoryName: "",
                    categoryDescription: "",
                    parentCategory: null,
                    isActive: true
                },
                isModalOpen: true,
                modalMode: "ADD",
            };

        case 'SET_ERRORS': 
            return {
                ...state, 
                errors: action.payload
            };

        case 'GET_CATEGORIES': 
            return {
                ...state,
                categories: action.payload,
                errors: {}
            }

        case 'ADD_CATEGORY': 
            return {
                ...state,
                categories: [...state.categories, action.payload],
                category: {...categoryInitialState.category},
                errors: {}
            };
        
        case 'UPDATE_CATEGORY': 
            return {
                ...state,
                categories: state.categories.map(c => c.categoryId === action.payload.categoryId ? action.payload : c),
                category: {...categoryInitialState.category},
                errors: {}
            }
            
        case 'DELETE_CATEGORY': 
            return {
                ...state,
                categories: state.categories.filter(c => c.categoryId !== action.payload.categoryId)
            }

        default: return state;
    }
} 