const emptyCustomer = {
    customerId: null,
    customerFullName: "",
    telephone: "",
    emailAddress: "",
    customerBirthday: "",
    customerStatus: "INACTIVE"
};

export const customerInitialState = {
    customers: [],
    customer: emptyCustomer,
    errors: {},
    generalError: ""
};

export function CustomerReducer(state, action) {
    switch (action.type) {

        case "SET_CUSTOMERS":
            return {
                ...state,
                customers: action.payload,
                errors: {},
                generalError: ""
            };

        case "SET_CUSTOMER":
            return {
                ...state,
                customer: action.payload,
                errors: {},
                generalError: ""
            };

        case "CLEAR_CUSTOMER":
            return {
                ...state,
                customer: emptyCustomer
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

        default:
            return state;
    }
}