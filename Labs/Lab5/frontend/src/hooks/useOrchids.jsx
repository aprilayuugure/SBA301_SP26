import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import validateOrchid from "../features/auth/OrchidValidation";
import OrchidService from "../service/OrchidService";
import CategoryService from "../service/CategoryService";
import { toast } from "react-toastify";
    
export const useOrchids = (state, dispatch, id = null, categories = []) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            OrchidService.getById(id)
                         .then(res => {
                            dispatch({ type: "UPDATE_ORCHID", payload: res.data });
                         })
        }
    }, [id, dispatch]);

    const checkForm = async () => {
        const errors = validateOrchid(state.orchid);

        if (Object.keys(errors).length > 0) {
            dispatch({ type: "SET_ERRORS", payload: errors });
            toast.warning("Please check for any empty fields");
        }
        else 
        {
            try 
            {
                const dataToSend = {
                    name: state.orchid.name,
                    image: state.orchid.image,
                    category: state.orchid.category,
                    description: state.orchid.description,
                    isSpecial: !!state.orchid.isSpecial,
                    price: parseFloat(state.orchid.price) || 0
                };

                if (id) {
                    await OrchidService.update(id, dataToSend);
                    toast.success("Orchid updated successfully");
                } 
                else {
                    const res = await OrchidService.add(dataToSend);

                    dispatch({ type: "ADD_ORCHID", payload: res.data });
                    toast.success("Orchid added successfully");
                }

                navigate(`/orchids`);
            }
            catch (err) {
                if (err.response) {
                    const status = err.response.status;
                    const data = err.response.data;

                    if (status === 400) {
                        Object.values(data).forEach(msg => toast.error(msg));
                    } else if (status === 404) {
                        toast.error(data.message);
                    }
                }
            }
        }
    }

    const deleteOrchid = async (id) => {
        try {
            await OrchidService.delete(id);
            toast.success("Orchid removed successfully");
            navigate(`/orchids`);
        }
        catch (err) {
            toast.error("Deletion failed. Please try again");
        }
    }
    
    const handleFieldChange = (field, value) =>
    {   
        if (field === 'category') value = categories.find(c => String(c.id) === String(value));

        dispatch({
            type: 'FIELD_CHANGE',
            field: field,
            value: value
        });
    };

    return {
        checkForm, 
        handleFieldChange, 
        deleteOrchid,
        errors: state.errors,
        orchid: state.orchid
    }
}
