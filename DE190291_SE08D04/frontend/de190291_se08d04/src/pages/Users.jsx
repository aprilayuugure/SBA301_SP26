import axios from "axios";
import { useEffect, useReducer } from "react";
import { userInitialState, userReducer } from "../stores/UserReducer";
import { useUsers } from "../hooks/useUsers";

function Users() {
    const [state, dispatch] = useReducer(userReducer, userInitialState);

    const { deleteUser } = useUsers(state, dispatch);

    return (
    <>
        <h3 className = "text-center align-items-center py-3">User Management</h3>

        <table className = "table table-striped table-hover align-middle px-5" >
            <thead className="table-primary text-white">
                <tr>
                    <th className = "px-3 py-2">ID</th>
                    <th className = "px-3 py-2">Name</th>
                    <th className = "px-3 py-2">Email</th>
                    <th className = "px-3 py-2">Role</th>
                </tr>
            </thead>

            <tbody>
                {state.users.map(user => (
                    <tr key = {user.accountId}>
                        <td className = "px-3">{user.accountId}</td>
                        <td className = "px-3">{user.accountName}</td>
                        <td className = "px-3">{user.accountEmail}</td>
                        <td className = "px-3">{user.accountRole === 1 ? "ADMIN" : "STAFF"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Users;