import axios from 'axios';
const API_URL = "http://localhost:8080";

const OrchidService = {
    getAll: () => {
        return axios.get(`${API_URL}/orchids`);
    },

    getById: (id) => {
        return axios.get(`${API_URL}/orchids/${id}`);
    },

    add: (data) => {
        return axios.post(`${API_URL}/orchid/add`, data);
    },

    update: (id, data) => {
        return axios.put(`${API_URL}/orchid/update/${id}`, data);
    },

    delete: (id) => {
        return axios.delete(`${API_URL}/orchid/delete/${id}`);
    }
}

export default OrchidService;