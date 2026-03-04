import api from "../api/axiosInstance";

const CarService = {
    getAll: () => {
        return api.get("/cars");
    },

    getById: (id) => {
        return api.get(`/cars/${id}`);
    },

    add: (data) => {
        return api.post("/cars", data);
    },

    update: (id, data) => {
        return api.put(`/cars/${id}`, data);
    },

    delete: (id) => {
        return api.delete(`/cars/${id}`);
    }
}

export default CarService;