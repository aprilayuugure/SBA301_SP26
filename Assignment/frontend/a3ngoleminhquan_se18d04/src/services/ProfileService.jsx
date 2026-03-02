import api from "../api/axiosInstance";

const ProfileService = {
    getMyProfile: () => {
        return api.get("/profile");
    },

    updateMyProfile: (data) => {
        return api.put("/profile", data);
    },
}

export default ProfileService;