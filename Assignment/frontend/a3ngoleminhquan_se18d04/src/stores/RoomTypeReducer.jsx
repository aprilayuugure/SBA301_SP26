const emptyRoomType = {
    roomTypeId: null,
    roomTypeName: "",
    typeDescription: "",
    typeNote: ""
}

export const roomTypeInitialState = {
    roomTypes: [],
    roomType: emptyRoomType,
    isModalOpen: false,
    modalMode: "ADD",
    errors: {},
    generalError: ""
}

export function RoomTypeReducer(state, action) {
    switch (action.type) {
        case "SET_ROOM_TYPES": 
        {
            return {
                ...state,
                roomTypes: action.payload,
                errors: {},
                generalError: ""
            };
        };

        case "SET_ROOM_TYPE": 
            return {
                ...state,
                roomType: action.payload,
                errors: {},
                generalError: ""
            };

        case "OPEN_MODAL": 
            return {
                ...state,
                isModalOpen: true,
                modalMode: action.payload.mode,
                roomType: action.payload.data || emptyRoomType
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                isModalOpen: false,
                roomType: emptyRoomType,
                errors: {},
                generalError: ""
            };

        case "FIELD_CHANGE": 
            return {
                ...state,
                roomType: {
                    ...state.roomType,
                    [action.field]: action.value
                },
                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            };

        case "ADD_SUCCESS": 
            return {
                ...state,
                roomTypes: [...state.roomTypes, action.payload],
                roomType: emptyRoomType,
                isModalOpen: false,
                errors: {},
                generalError: ""
            };

        case "UPDATE_SUCCESS": 
            return {
                ...state,
                roomTypes: state.roomTypes.map(rt => rt.roomTypeId === action.payload.roomTypeId ? action.payload : rt
                ),
                roomType: emptyRoomType,
                isModalOpen: false,
                errors: {},
                generalError: ""
            };

        case "DELETE_SUCCESS": 
            return {
                ...state,
                roomTypes: state.roomTypes.filter(rt => rt.roomTypeId !== action.payload)
            };

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.payload.general ? {} : action.payload,
                generalError: action.payload.general || ""
            };

        case "CLEAR_ERRORS":
            return {
                ...state,
                errors: {},
                generalError: ""
            };

        default: return state;
    }
}