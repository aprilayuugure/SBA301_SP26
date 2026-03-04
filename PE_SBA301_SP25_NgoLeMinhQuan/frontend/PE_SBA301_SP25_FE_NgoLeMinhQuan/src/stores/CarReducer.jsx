const today = new Date().toISOString().split("T")[0];

const emptyCar = {
    carId: null,
    carName: "",
    countryId: null,
    unitsInStock: "",
    unitPrice: "",
    createdAt: today,
    updatedAt: today
}

export const carInitialState = {
    cars: [],
    car: emptyCar,
    countries: [],
    errors: {},
    generalError: ""
}

export function CarReducer(state, action) {
    switch (action.type) {
        case "SET_CARS": 
        {
            return {
                ...state,
                cars: action.payload,
                errors: {},
                generalError: ""
            };
        };

        case "SET_CAR": 
            return {
                ...state,
                car: {
                    ...action.payload,
                    countryId: action.payload.countryResponse ? action.payload.countryResponse.countryId : null
                },
                errors: {},
                generalError: ""
            };

        case "SET_COUNTRIES": 
            return {
                ...state,
                countries: action.payload
            }


        case "FIELD_CHANGE": 
            return {
                ...state,
                car: {
                    ...state.car,
                    [action.field]: action.value
                },
                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            };

        case "DELETE_SUCCESS": 
            return {
                ...state,
                cars: state.cars.filter(c => c.carId !== action.payload)
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