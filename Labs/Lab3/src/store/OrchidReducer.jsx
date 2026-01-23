export const orchidInitialState = {
    orchid: {
      id: 0,
      name: '',
      image: '',
      description: '',
      category: '',
      isSpecial: false,
      price: 0.00
    },

    errors: {}
};

export function orchidReducer(state, action) {
    switch (action.type)
    {
        case 'FIELD_CHANGE': 
            return {
                ...state,
                orchid: {
                    ...state.orchid,
                    [action.field]: action.value
                },

                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            }

        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload
            }

        case 'ADD_ORCHID':
            return orchidInitialState;

        case 'UPDATE_ORCHID':
            return {
                ...state, 
                orchid: action.payload,
                errors: {}
            }
        
        default: return state;
    }
}