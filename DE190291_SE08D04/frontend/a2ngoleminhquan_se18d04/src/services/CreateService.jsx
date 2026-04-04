import axios from "axios";
const API_URL = "http://localhost:8080";

const CreateService = (endpoint) => {
    const api = axios.create({ baseURL: `${API_URL}/${endpoint}`});
    
    return {
        getAll: () => api.get(""),

        getById: (id) => api.get(`/${id}`),

        add: (data) => api.post("/add", data),

        update: (id, data) => api.put(`/${id}/update`, data),
        
        remove: (id) => api.delete(`/${id}/delete`)
    };
}

export default CreateService;