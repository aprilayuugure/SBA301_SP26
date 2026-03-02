import { useEffect } from "react";
import { useRoomTypes } from "../hooks/useRoomTypes";
import RoomTypeModal from "../features/RoomTypeModal";

function RoomTypeManagement() {
    const roomTypeHook = useRoomTypes();
    const { state, getAll, openModal, remove } = roomTypeHook;

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <div className = "py-4 text-center">
                <h3 className = "mb-3">Room Type Management</h3>

                <button
                    className = "btn"
                    style= {{
                        backgroundColor: "#ef233c",
                        borderColor: "#ef233c",
                        color: "white",
                        padding: "8px 25px"
                    }}
                    onClick={() => openModal("ADD")}
                >
                    Add room type
                </button>
            </div>

            <div className = "container">
                <div className = "table-responsive shadow rounded">
                    <table className = "table align-middle text-center mb-0">
                        <thead
                            style={{
                                backgroundColor: "#ff7171",
                                color: "white"
                            }}
                        >
                            <tr>
                                <th style = {{ width: "15%" }}>ID</th>
                                <th style = {{ width: "60%" }}>Room Type Name</th>
                                <th style = {{ width: "25%" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.roomTypes.map((rt) => (
                                <tr key = {rt.roomTypeId}>
                                    <td className = "fw-semibold">
                                        {rt.roomTypeId}
                                    </td>

                                    <td className = "text-start ps-4">
                                        <span style = {{ color: "#ef233c",
                                                         cursor: "pointer",
                                                         fontWeight: 500
                                                      }}
                                              onClick={() => openModal("VIEW", rt)}
                                        >
                                        {rt.roomTypeName}
                                        </span>
                                    </td>

                                    <td>
                                        <i
                                            className = "bi bi-pencil-square me-4"
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                color: "#ffb703"
                                            }}
                                            onClick = {() =>
                                                openModal("UPDATE", rt)
                                            }
                                        ></i>

                                        <i
                                            className = "bi bi-trash"
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                color: "#ef233c"
                                            }}
                                            onClick={() =>
                                                remove(rt.roomTypeId)
                                            }
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {state.isModalOpen && (
                <RoomTypeModal roomTypeHook = {roomTypeHook} />
            )}
        </>
    );
}

export default RoomTypeManagement;