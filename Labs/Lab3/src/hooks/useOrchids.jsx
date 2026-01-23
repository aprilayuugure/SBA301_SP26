import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import validateOrchid from "../features/auth/OrchidValidation";
import OrchidService from "../service/OrchidService";

export const useOrchids = (state, dispatch, id = null) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            OrchidService.getById(id)
                         .then(res => {
                            dispatch({ type: "UPDATE_ORCHID", payload: res.data });
                         })
        }

        return () => {
            dispatch({ type: "ADD_ORCHID"});
        }
        
    }, [id, dispatch]);

    const checkForm = async () => {
        const errors = validateOrchid(state.orchid);

        if (Object.keys(errors).length > 0) dispatch({ type: "SET_ERRORS", payload: errors })
        else 
        {
            try 
            {
                if (id) {
                    await OrchidService.update(id, state.orchid);
                } 
                else {
                    await OrchidService.add(state.orchid);
                    dispatch({ type: "ADD_ORCHID"});
                }

                navigate(`/orchids`);
                window.location.reload();
            }
            catch (err) {
                console.error(err);
            }
        }
    }

    const deleteOrchid = async (id) => {
        await OrchidService.delete(id);
        navigate(`/orchids`);
        window.location.reload();
    }
    
    const handleFieldChange = (field, value) =>
    {   
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
