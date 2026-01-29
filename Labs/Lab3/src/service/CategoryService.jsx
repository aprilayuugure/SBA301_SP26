import axios from 'axios';
const API_URL = "http://localhost:8080";

const CategoryService = {
    getAll: () => {
        return axios.get(`${API_URL}/categories`);
    }
}

export default CategoryService;