import axios from 'axios';
const API_URL = "http://localhost:8080/orchids";

const OrchidService = {
    getAll: () => {
        return axios.get(API_URL);
    },

    getById: (id) => {
        return axios.get(`${API_URL}/${id}`);
    },

    add: (data) => {
        return axios.post(API_URL, data);
    },

    update: (id, data) => {
        return axios.put(`${API_URL}/${id}`, data);
    },

    delete: (id) => {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default OrchidService;