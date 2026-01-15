import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!user.username) {
            newErrors.username = "Please fill in the field."
        }
        else if (user.username !== "admin") {
            newErrors.username = "Wrong username. Please try again."
        }

        if (!user.password) {
            newErrors.password = "Please fill in the field."
        }
        else if (user.password !== "123456") {
            newErrors.password = "Wrong password. Please try again."
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Login successful!");
            navigate(`/orchids`);
        }
    };

    const handleChange = (field, value) => {
        setUser({ ...user, [field]: value });
        setErrors({ ...errors, [field]: '' });
    }
    
    return (
        <Container className = "d-flex justify-content-center align-items-center" style = {{ minHeight: '80vh'}}>
            <Card className = "p-4 shadow" style = {{ width: '400px'}}>
                <h4 className = 'text-center mb-4'>Login Form</h4>
       
                 <Form onSubmit = {handleSubmit}>
                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type = "text" placeholder = "Enter username" 
                                          value = {user.username} onChange = {(e) => handleChange("username", e.target.value)}
                                          isInvalid = {!!errors.username}
                            />
                            <Form.Control.Feedback type = "invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type = "password" placeholder = "Enter password" 
                                          value = {user.password} onChange = {(e) => handleChange("password", e.target.value)}
                                          isInvalid = {!!errors.password}
                            />
                            <Form.Control.Feedback type = "invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "justify-content-center mb-3">
                        <Col xs = "auto">
                            <Button variant = "secondary" type = "reset">Cancel</Button>
                        </Col>

                        <Col xs = "auto">
                            <Button variant = "primary" type = "submit">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}

export default Login;