import { useEffect } from "react";
import { useCars } from "../hooks/useCars";
import { useNavigate } from "react-router-dom";

function CarManagement() {
    const carHook = useCars();
    const { state, getAll, getAllCountries, remove } = carHook;

    const navigate = useNavigate();

    useEffect(() => {
        getAll();
        getAllCountries();
    }, []);

    return (
        <>
            <div className = "py-4 text-center">
                <h3 className = "mb-3">Car Management</h3>

                <button
                    className = "btn"
                    style= {{
                        backgroundColor: "#ef233c",
                        borderColor: "#ef233c",
                        color: "white",
                        padding: "8px 25px"
                    }}
                    onClick={() => navigate("/cars/add")}
                >
                    Add car
                </button>
            </div>

            <div className = "container" style = {{ maxWidth: "1150px" }}>
                <div className = "table-responsive shadow rounded">
                    <table className = "table table-sm table-hover align-middle text-center mb-0">
                        <thead
                            style={{
                                backgroundColor: "#ff7171",
                                color: "white"
                            }}
                        >
                            <tr>
                                <th style = {{ width: "6%" }}>ID</th>
                                <th className = "text-start ps-4">Name</th>
                                <th>Country</th>
                                <th>Units in stock</th>
                                <th>Unit price</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th style = {{ width: "10%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.cars.map((c) => (
                                <tr key = {c.carId}>
                                    <td className = "fw-semibold">
                                        {c.carId}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.carName}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.countryResponse?.countryName}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.unitsInStock}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.unitPrice}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.createdAt}
                                    </td>

                                    <td className = "fw-semibold">
                                        {c.updatedAt}
                                    </td>

                                    <td>
                                        <i
                                            className = "bi bi-pencil-square me-4"
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                color: "#ffb703"
                                            }}
                                            onClick = {() => navigate(`/cars/${c.carId}`)}
                                        ></i>

                                        <i
                                            className = "bi bi-trash"
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                color: "#ef233c"
                                            }}
                                            onClick={() => remove(c.carId) }
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CarManagement;