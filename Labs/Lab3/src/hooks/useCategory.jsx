import { useEffect, useState } from "react";
import CategoryService from "../service/CategoryService";

export function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getAll()
                       .then(res => setCategories(res.data))
    }, []);

    return categories;
}