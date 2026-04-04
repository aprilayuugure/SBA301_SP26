import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import CreateService from "../services/CreateService";

const NewsArticleService = CreateService("news");

export function useNewsArticles(state, dispatch, id = null) {
    const navigate = useNavigate();

    useEffect(() => {
        getAllNewsArticles();
    }, []);

    const getAllNewsArticles = async() => {
        try {
            const res = await NewsArticleService.getAll();

             console.log("FULL RESPONSE:", res);        
            console.log("RESPONSE DATA:", res.data);

            dispatch({ type: "GET_NEWS_ARTICLES", payload: res.data });
        }
        catch (err) {

        }
    }

    const handleFieldChange = (field, value) => {
        dispatch({ type: "FIELD_CHANGE", field, value });
    }

    const deleteNewsArticle = async(id) => {
        if (window.confirm("Are you sure you want to delete this category?"))
            try {
                await NewsArticleService.remove(id);

                dispatch({ type: "DELETE_NEWS_ARTICLE", payload: { newsArticleId: id } });
            }
            catch (err) {

            }
    }

    return {
        handleFieldChange, 
        deleteNewsArticle,
        newsArticles: state.newsArticles,
        newsArticle: state.newsArticle,
        errors: state.errors
    }
}