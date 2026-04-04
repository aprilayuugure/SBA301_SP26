import { useNavigate } from 'react-router-dom';
import CreateService from '../services/CreateService';
import { useEffect } from 'react';
import { validateCategory } from '../features/auth/validateCategory';

const CategoryService = CreateService("categories");

export function useCategories(state, dispatch, id = null) {
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories();
    }, [])

    useEffect(() => {
        if (id)
        {
            CategoryService.getById(id)
                       .then(res => { dispatch({ type: "UPDATE_CATEGORY", payload: res.data }) });
        }
    }, [id, dispatch]);

    const getAllCategories = async() => {
        try {
            const res = await CategoryService.getAll();
            dispatch({ type: "GET_CATEGORIES", payload: res.data });
        }
        catch (err) {

        }
    };

    const checkForm = async() => {
        const errors = validateCategory(state.category);

        if (Object.keys(errors).length > 0) {
            dispatch({ type: "SET_ERRORS", payload: errors });
        }
        else 
        {
            try {
                const categoryToSave = {
                    categoryName: state.category.categoryName,
                    categoryDescription: state.category.categoryDescription,
                    parentCategory: state.category.parentCategory,
                    isActive: state.category.isActive
                };

                if (id) {
                    await CategoryService.update(id, categoryToSave);
                }
                else {
                    const res = await CategoryService.add(categoryToSave);

                    dispatch({ type: "ADD_CATEGORY", payload: res.data})
                }
            }
            catch (err) {

            }
        }
    }

    const handleFieldChange = (field, value) => {
        dispatch({ type: "FIELD_CHANGE", field, value });
    }

    const deleteCategory = async(id) => {
        if (window.confirm("Are you sure you want to delete this category?"))
            try {
                await CategoryService.remove(id);

                dispatch({ type: "DELETE_CATEGORY", payload: { categoryId: id } });
            }
            catch (err) {

            }
    }

    return {
        checkForm,
        handleFieldChange,
        deleteCategory,
        categories: state.categories,
        category: state.category,
        errors: state.errors
    }
}