import api from '../api/axiosInstance'

const CategoryService = {
    getAllCategories: () => {
        return api.get("/categories");
    }
}

export default CategoryService;