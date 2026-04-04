import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Header() {
    const { state, logout } = useAuth();
    const user = state.user;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid">

                {/* Logo */}
                <Link className="navbar-brand fw-bold" to="/">
                    Hotel System
                </Link>

                {/* Toggle button (mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    
                    {/* Align right */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

                        {/* Not login */}
                        {!user && (
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-primary">
                                    Login
                                </Link>
                            </li>
                        )}

                        {/* USER */}
                        {user?.role === "ROLE_USER" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/my-reservations">
                                        My Reservations
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        My Profile
                                    </Link>
                                </li>

                                <li className="nav-item ms-lg-3">
                                    <button
                                        className="btn btn-outline-light"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {user?.role === "ROLE_STAFF" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/manage-customers">
                                        Manage Customers
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/manage-reservations">
                                        Manage Reservations
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/manage-rooms">
                                        Manage Rooms
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/manage-room-types">
                                        Manage Room Types
                                    </Link>
                                </li>

                                <li className="nav-item ms-lg-3">
                                    <button
                                        className="btn btn-outline-light"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;