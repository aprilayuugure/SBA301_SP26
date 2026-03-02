import { useEffect, useState } from "react";
import { useProfile } from "../hooks/useProfile";

function Profile() {
    const { state, getMyProfile, updateMyProfile, handleFieldChange } =
        useProfile();

    const [isEditing, setIsEditing] = useState(false);
    const [originalProfile, setOriginalProfile] = useState(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        await getMyProfile();
    };

    const handleEdit = () => {
        setOriginalProfile(state.profile);
        setIsEditing(true);
    };

    const handleCancel = () => {
        handleFieldChange("customerFullName", originalProfile.customerFullName);
        handleFieldChange("telephone", originalProfile.telephone);
        handleFieldChange("emailAddress", originalProfile.emailAddress);
        handleFieldChange("customerBirthday", originalProfile.customerBirthday);
        setIsEditing(false);
    };

    const handleSave = async () => {
        const success = await updateMyProfile();
        if (success) {
            setIsEditing(false);
        }
    };

    const { profile } = state;

    return (
        <div className="container py-4" style={{ maxWidth: "600px" }}>
            <h3 className="text-center mb-4">My Profile</h3>

            {state.generalError && (
                <div className="alert alert-danger">
                    {state.generalError}
                </div>
            )}

            <div className="card shadow p-4">

                {/* Full Name */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={profile.customerFullName || ""}
                        disabled={!isEditing}
                        onChange={(e) =>
                            handleFieldChange(
                                "customerFullName",
                                e.target.value
                            )
                        }
                    />
                </div>

                {/* Telephone */}
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={profile.telephone || ""}
                        disabled={!isEditing}
                        onChange={(e) =>
                            handleFieldChange("telephone", e.target.value)
                        }
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={profile.emailAddress || ""}
                        disabled
                    />
                </div>

                {/* Birthday */}
                <div className="mb-3">
                    <label className="form-label">Birthday</label>
                    <input
                        type="date"
                        className="form-control"
                        value={profile.customerBirthday || ""}
                        disabled={!isEditing}
                        onChange={(e) =>
                            handleFieldChange(
                                "customerBirthday",
                                e.target.value
                            )
                        }
                    />
                </div>

                {/* Buttons */}
                <div className="text-end">
                    {!isEditing ? (
                        <button
                            className="btn btn-primary"
                            onClick={handleEdit}
                        >
                            Update Profile
                        </button>
                    ) : (
                        <>
                            <button
                                className="btn btn-secondary me-2"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;