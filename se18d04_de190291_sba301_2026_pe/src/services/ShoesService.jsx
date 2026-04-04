import api from "../api/axiosInstance";
import { withShoesDatesForApi } from "../utils/validation";

const ShoesService = {
  searchShoes: (q = {}) => {
    const params = {
      page: q.page ?? 0,
      size: q.size ?? 10,
      sortBy: q.sortBy || "shoesId",
      direction: q.direction || "asc",
    };
    const name = String(q.name ?? "").trim();
    const category = String(q.category ?? "").trim();
    if (name) params.name = name;
    if (category) params.category = category;
    return api.get("/shoes/search", { params });
  },

  getShoesById: (id) => api.get(`/shoes/${id}`),

  addShoes: (data) => api.post("/shoes", withShoesDatesForApi(data)),

  deleteShoes: (id) => api.delete(`/shoes/${id}`),
};

export default ShoesService;
