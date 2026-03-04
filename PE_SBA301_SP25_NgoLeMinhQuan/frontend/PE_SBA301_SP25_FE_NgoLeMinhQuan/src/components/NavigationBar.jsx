import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import LoginModal from "./LoginModal";

function NavigationBar() {
    const { state, logout } = useAuth();
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <Navbar bg = "light" expand = "lg" className = "shadow-sm">
                <Container>
                    <Navbar.Brand>SE18D04 - Ngo Le Minh Quan - PE Spring 25</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>

                        <Nav className = "me-auto">

                            <Nav.Link as = {Link} to = "/">Home</Nav.Link>

                            <NavDropdown title = "Car Management"
                                         disabled = {!state.user}
                            >
                                <NavDropdown.Item as = {Link} to = "/cars">
                                    List all cars
                                </NavDropdown.Item>

                                <NavDropdown.Item as = {Link} to = "/cars/add">
                                    Add a new car
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Nav>
                            {!state.user ? (
                                <Nav.Link onClick = {() => setShowLogin(true)}>
                                    Login
                                </Nav.Link>
                            ) : (
                                <Nav.Link onClick = {handleLogout}>
                                    Logout
                                </Nav.Link>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <LoginModal
                show = {showLogin}
                handleClose = {() => setShowLogin(false)}
            />
        </>
    );
}

export default NavigationBar;