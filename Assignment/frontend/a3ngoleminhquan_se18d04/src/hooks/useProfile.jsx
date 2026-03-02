import { useReducer } from "react";
import ProfileService from "../services/ProfileService";
import { ProfileReducer, profileInitialState } from "../stores/ProfileReducer";

export function useProfile() {
    const [state, dispatch] = useReducer(ProfileReducer, profileInitialState);

    const getMyProfile = async () => {
        try {
            const response = await ProfileService.getMyProfile();
            dispatch({ type: "SET_PROFILE", payload: response.data });
        } catch (error) {
            dispatch({
                type: "SET_ERRORS",
                payload: { general: "Failed to load profile" }
            });
        }
    };

    const updateMyProfile = async () => {
        try {
            const response = await ProfileService.updateMyProfile(
                state.profile
            );
            dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
            return true;
        } catch (error) {
            if (error.response?.data) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: error.response.data
                });
            } else {
                dispatch({
                    type: "SET_ERRORS",
                    payload: { general: "Update failed" }
                });
            }
            return false;
        }
    };

    const handleFieldChange = (field, value) => {
        dispatch({ type: "FIELD_CHANGE", field, value });
    };

    return {
        state,
        getMyProfile,
        updateMyProfile,
        handleFieldChange
    };
}