import api from "../api/axiosInstance";
import { DEFAULT_PAGE_SIZE } from "../constants/pagination";

const RestaurantService = {
    searchRestaurants: (q = {}) => {
        const params = {
            page: q.page ?? 0,
            size: q.size ?? DEFAULT_PAGE_SIZE,
            sortBy: q.sortBy || "restaurantName",
        };

        const name = String(q.name ?? "").trim();
        if (name) params.name = name;

        const categoryId = q.categoryId;
        if (categoryId !== "" && categoryId != null && !Number.isNaN(Number(categoryId))) {
            params.categoryId = Number(categoryId);
        }

        return api.get("/restaurants", { params });
  },
  
  getRestaurantById: (id) => api.get(`/restaurants/${id}`),

  addRestaurant: (data) => api.post("/restaurants", data),

  updateRestaurant: (id, data) => api.put(`/restaurants/${id}`, data),

  deleteRestaurant: (id) => api.delete(`/restaurants/${id}`),
}

export default RestaurantService;