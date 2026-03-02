const emptyRoomInformation = {
    roomId: null,
    roomNumber: "",
    roomDetailDescription: "",
    roomMaxCapacity: "",
    roomTypeId: null,
    roomStatus: "UNOCCUPIED",
    roomPricePerDay: ""
}

export const roomInformationInitialState = {
    roomInformations: [],
    roomInformation: emptyRoomInformation,
    roomTypes: [],
    isModalOpen: false,
    modalMode: "ADD",
    errors: {},
    generalError: ""
};

export function RoomInformationReducer(state, action) {
    switch (action.type) {
        case "SET_ROOM_INFORMATIONS": 
        {
            return {
                ...state,
                roomInformations: action.payload,
                errors: {},
                generalError: ""
            };
        };

        case "SET_ROOM_INFORMATION": 
            return {
                ...state,
                roomInformation: action.payload,
                errors: {},
                generalError: ""
            };

        case "SET_ROOM_TYPES": 
            return {
                ...state, 
                roomTypes: action.payload
            }

        case "OPEN_MODAL": 
            return {
                ...state,
                isModalOpen: true,
                modalMode: action.payload.mode,
                roomInformation: action.payload.data || emptyRoomInformation
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                isModalOpen: false,
                roomInformation: emptyRoomInformation,
                errors: {},
                generalError: ""
            };

        case "FIELD_CHANGE": 
            return {
                ...state,
                roomInformation: {
                    ...state.roomInformation,
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
                roomInformations: [...state.roomInformations, action.payload],
                roomInformation: emptyRoomInformation,
                isModalOpen: false,
                errors: {},
                generalError: ""
            };

        case "UPDATE_SUCCESS": 
            return {
                ...state,
                roomInformations: state.roomInformations.map(r => r.roomId === action.payload.roomId ? action.payload : r
                ),
                roomInformation: emptyRoomInformation,
                isModalOpen: false,
                errors: {},
                generalError: ""
            };

        case "DELETE_SUCCESS": 
            return {
                ...state,
                roomInformations: state.roomInformations.filter(r => r.roomId !== action.payload)
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