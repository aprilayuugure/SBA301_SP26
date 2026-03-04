import api from "../api/axiosInstance";

const CarService = {
    getAll: () => {
        return api.get("/countries");
    },

    getById: (id) => {
        return api.get(`/countries/${id}`);
    },

    add: (data) => {
        return api.post("/countries", data);
    },

    update: (id, data) => {
        return api.put(`/countries/${id}`, data);
    },

    delete: (id) => {
        return api.delete(`/countries/${id}`);
    }
}

export default CarService;