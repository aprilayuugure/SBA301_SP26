import api from "../api/axiosInstance";

const RoomInformationService = {
    getAll: () => {
        return api.get("/rooms");
    },

    getById: (id) => {
        return api.get(`/rooms/${id}`);
    },

    add: (data) => {
        return api.post("/rooms", data);
    },

    update: (id, data) => {
        return api.put(`/rooms/${id}`, data);
    },

    delete: (id) => {
        return api.delete(`/rooms/${id}`);
    }
}

export default RoomInformationService;