import api from "../api/axiosInstance";

const RoomTypeService = {
    getAll: () => {
        return api.get("/room-types");
    },

    getById: (id) => {
        return api.get(`/room-types/${id}`);
    },

    add: (data) => {
        return api.post("/room-types", data);
    },

    update: (id, data) => {
        return api.put(`/room-types/${id}`, data);
    },

    delete: (id) => {
        return api.delete(`/room-types/${id}`);
    }
}

export default RoomTypeService;