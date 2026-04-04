import api from '../api/axiosInstance'

const ShoesCategoryService = {
    getAllCategories: () => {
        return api.get("/categories");
    }
}

export default ShoesCategoryService;