import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/auth.css";
import HotelCarousel from "../components/HotelCarousel";
import { useAuth } from "../hooks/useAuth";

function Login() {
    const { state, handleFieldChange, login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

    return (
        <Container fluid className = "auth-container p-0">
            <Row className = "g-0 min-vh-100 align-items-stretch">

                <Col md = {6} className="d-none d-md-block p-0">
                    <HotelCarousel />
                </Col>

                <Col md = {6} className = "auth-right d-flex align-items-center">
                    <div className = "auth-form-wrapper">
                        <h3 className = "mb-4 text-center">Login</h3>

                        <Form onSubmit = {handleSubmit}>
                            <Form.Group className = "mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type = "email" 
                                              className = "auth-form-control"
                                              value = {state.loginForm.emailAddress}
                                              onChange = {(e) => handleFieldChange("loginForm", "emailAddress", e.target.value)} />

                                {state.errors.emailAddress && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.emailAddress}
                                    </div>
                                }
                            </Form.Group>

                            <Form.Group className = "mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password" 
                                              className = "auth-form-control"
                                              value = {state.loginForm.password}
                                              onChange = {(e) => handleFieldChange("loginForm", "password", e.target.value)} />
                                
                                {state.errors.password && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.password}
                                    </div>
                                }
                            </Form.Group>

                            <Button type = "submit" className = "w-100 auth-btn">
                                Login
                            </Button>

                           {state.generalError && 
                                 <div className = "text-danger mt-1">
                                    {state.generalError}
                                </div>
                            }

                            <p className = "auth-footer-text">
                                Don't have an account? <Link to = "/register">Register</Link> here
                            </p>
                        </Form>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Login;