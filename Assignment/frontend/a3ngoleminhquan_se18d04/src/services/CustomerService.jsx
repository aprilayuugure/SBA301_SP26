import api from "../api/axiosInstance";

const CustomerService = {
    getAll: () => {
        return api.get("/customers");
    },

    getById: (id) => {
        return api.get(`/customers/${id}`);
    },
}

export default CustomerService;