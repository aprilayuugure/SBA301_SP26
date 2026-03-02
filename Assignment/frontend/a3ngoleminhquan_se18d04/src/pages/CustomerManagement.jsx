import { useEffect } from "react";
import { useCustomers } from "../hooks/useCustomers";

function CustomerManagement() {
    const { state, getAll } = useCustomers();

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <div className = "py-4 text-center">
                <h3 className = "mb-3">Customers</h3>
            </div>

            <div className = "container">
                {state.generalError && (
                    <div className = "alert alert-danger">
                        {state.generalError}
                    </div>
                )}

                <div className = "table-responsive shadow rounded">
                    <table className = "table align-middle text-center mb-0">
                        <thead
                            style={{
                                backgroundColor: "#ff7171",
                                color: "white"
                            }}
                        >
                            <tr>
                                <th style = {{ width: "10%" }}>ID</th>
                                <th style = {{ width: "20%" }}>Full name</th>
                                <th style = {{ width: "20%" }}>Telephone</th>
                                <th style = {{ width: "25%" }}>Email address</th>
                                <th style = {{ width: "15%" }}>Birthday</th>
                                <th style = {{ width: "10%" }}>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.customers.length === 0 ? (
                                <tr>
                                    <td colSpan = "6" className = "py-4">
                                        No customers found
                                    </td>
                                </tr>
                            ) : (
                                state.customers.map((customer) => (
                                    <tr key = {customer.customerId}>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.customerFullName}</td>
                                        <td>{customer.telephone}</td>
                                        <td>{customer.emailAddress}</td>
                                        <td>
                                            {customer.customerBirthday
                                                ? new Date(
                                                      customer.customerBirthday
                                                  ).toLocaleDateString()
                                                : ""}
                                        </td>
                                        <td>
                                            <span
                                                className = {
                                                    customer.customerStatus === "ACTIVE"
                                                        ? "badge bg-success"
                                                        : "badge bg-secondary"
                                                }
                                            >
                                                {customer.customerStatus}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CustomerManagement;