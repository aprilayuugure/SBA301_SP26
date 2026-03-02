import { useReducer } from "react";
import api from "../api/axiosInstance";
import { roomInformationInitialState, RoomInformationReducer } from "../stores/RoomInformationReducer";

export function useRoomInformations() {
    const [state, dispatch] = useReducer(RoomInformationReducer, roomInformationInitialState);

    const handleFieldChange = (field, value) => {
        dispatch({
            type: "FIELD_CHANGE", 
            field,
            value
        });
    };

    const getAll = async () => {
        try {
            const res = await api.get("/rooms");

            dispatch({
                type: "SET_ROOM_INFORMATIONS",
                payload: res.data
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Cannot load room informations" }
            });
        }
    }

    const getById = async (id) => {
        try {
            const res = await api.get(`/rooms/${id}`);

            dispatch({
                type: "SET_ROOM_INFORMATION",
                payload: res.data
                });
            }
            catch (error) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: error.response?.data || { general: "Cannot load room information" }
            });
        }
    };

    const getAllRoomTypes = async () => {
        try {
            const res = await api.get("/room-types");

            dispatch({
                type: "SET_ROOM_TYPES",
                payload: res.data
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Cannot load room types" }
            });
        }
    }

    const save = async () => {
        dispatch({ type: "CLEAR_ERRORS"});

        try {
            if (state.modalMode === "ADD") {
                const res = await api.post("/rooms", state.roomInformation);

                dispatch({
                    type: "ADD_SUCCESS",
                    payload: res.data
                });
            }
            else {
                console.log("UPDATE MODE");
                const res = await api.put(
                    `/rooms/${state.roomInformation.roomId}`, state.roomInformation
                );

                dispatch({
                    type: "UPDATE_SUCCESS",
                    payload: res.data
                });
            }
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Save failed" }
            });
        }
    };

    const remove = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this room type?");

        if (!isConfirmed) return;

        try {
            await api.delete(`/rooms/${id}`);

            dispatch({
                type: "DELETE_SUCCESS",
                payload: id
            });
        }
        catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: error.response?.data || { general: "Deletion failed" }
            });
        }
    }

    const openModal = async (mode, data = null) => {
        await getAllRoomTypes();
        
        dispatch({
            type: "OPEN_MODAL",
            payload: {
                mode, 
                data
            }
        });
    };

    const closeModal = () => {
        dispatch({
            type: "CLOSE_MODAL",
        });
    };

    return {
        state,
        handleFieldChange,
        getAll,
        getById,
        save,
        remove,
        openModal,
        closeModal
    }
}