import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/auth.css";
import HotelCarousel from "../components/HotelCarousel";
import { useAuth } from "../hooks/useAuth";

function Registration() {
    const { state, handleFieldChange, register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    }
    
    return (
        <Container fluid className = "auth-container p-0">
            <Row className = "g-0 min-vh-100 align-items-stretch">

                <Col md={6} className="d-none d-md-block p-0">
                    <HotelCarousel />
                </Col>

                <Col md = {6} className = "auth-right d-flex align-items-center">
                    <div className = "auth-form-wrapper">
                        <h3 className = "mb-4 text-center">Create an account</h3>

                        <Form onSubmit = {handleSubmit}>
                            <Form.Group className = "mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type = "text" 
                                              className = "auth-form-control"
                                              value = {state.registerForm.customerFullName}
                                              onChange = {(e) => handleFieldChange("registerForm", "customerFullName", e.target.value)} />

                                {state.errors.customerFullName && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.customerFullName}
                                    </div>
                                }

                            </Form.Group>

                            <Form.Group className = "mb-3">
                                <Form.Label>Telephone</Form.Label>
                                <Form.Control type = "tel" 
                                              className = "auth-form-control"
                                              value = {state.registerForm.telephone}
                                              onChange = {(e) => handleFieldChange("registerForm", "telephone", e.target.value)} />

                                {state.errors.telephone && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.telephone}
                                    </div>
                                }
                            </Form.Group>

                            <Form.Group className = "mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type = "email" 
                                              className = "auth-form-control"
                                              value = {state.registerForm.emailAddress}
                                              onChange = {(e) => handleFieldChange("registerForm", "emailAddress", e.target.value)} />

                                {state.errors.emailAddress && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.emailAddress}
                                    </div>
                                }
                            </Form.Group>

                            <Form.Group className = "mb-3">
                                <Form.Label>Customer Birthday</Form.Label>
                                <Form.Control type = "date" 
                                              className = "auth-form-control"
                                              value = {state.registerForm.customerBirthday}
                                              onChange = {(e) => handleFieldChange("registerForm", "customerBirthday", e.target.value)} />

                                {state.errors.customerBirthday && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.customerBirthday}
                                    </div>
                                }
                            </Form.Group>

                            <Form.Group className = "mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password" 
                                              className = "auth-form-control"
                                              value = {state.registerForm.password}
                                              onChange = {(e) => handleFieldChange("registerForm", "password", e.target.value)} />
                                
                                {state.errors.password && 
                                    <div className = "text-danger mt-1">
                                        {state.errors.password}
                                    </div>
                                }
                            </Form.Group>

                            <Button type = "submit" className = "w-100 auth-btn">
                                Create Account
                            </Button>

                            {state.generalError && 
                                 <div className = "text-danger mt-1">
                                    {state.generalError}
                                </div>
                            }
                            
                            <p className = "auth-footer-text">
                                Already have an account? <Link to = "/login">Login</Link> here
                            </p>
                        </Form>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Registration;