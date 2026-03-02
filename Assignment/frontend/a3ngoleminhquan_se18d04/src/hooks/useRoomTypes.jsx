import { useReducer } from "react";
import api from "../api/axiosInstance";
import { roomTypeInitialState, RoomTypeReducer } from "../stores/RoomTypeReducer";

export function useRoomTypes() {
    const [state, dispatch] = useReducer(RoomTypeReducer, roomTypeInitialState);

    const handleFieldChange = (field, value) => {
        dispatch({
            type: "FIELD_CHANGE", 
            field,
            value
        });
    };

    const getAll = async () => {
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

    const getById = async (id) => {
        try {
            const res = await api.get(`/room-types/${id}`);

            dispatch({
                type: "SET_ROOM_TYPE",
                payload: res.data
                });
            }
            catch (error) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: error.response?.data || { general: "Cannot load room types" }
            });
        }
    };

    const save = async () => {
        dispatch({ type: "CLEAR_ERRORS"});

        try {
            if (state.modalMode === "ADD") {
                const res = await api.post("/room-types", state.roomType);

                dispatch({
                    type: "ADD_SUCCESS",
                    payload: res.data
                });
            }
            else {
                console.log("UPDATE MODE");
                const res = await api.put(
                    `/room-types/${state.roomType.roomTypeId}`, state.roomType
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
            await api.delete(`/room-types/${id}`);

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

    const openModal = (mode, data = null) => {
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