import api from "../api/axiosInstance";

const RestaurantService = {
    searchRestaurants: (q = {}) => {
        const params = {
            page: q.page ?? 0,
            size: q.size ?? 10,
            sortBy: q.sortBy || "restaurantName",
        };

        const name = String(q.name ?? "").trim();
        if (name) params.name = name;

        if (q.categoryId != null) params.categoryId = q.categoryId;

        return api.get("/restaurants", { params });
  },
  
  getRestaurantById: (id) => api.get(`/restaurants/${id}`),

  addRestaurant: (data) => api.post("/restaurants", data),

  updateRestaurant: (id, data) => api.put(`/restaurants/${id}`, data),

  deleteRestaurant: (id) => api.delete(`/restaurants/${id}`),
}

export default RestaurantService;