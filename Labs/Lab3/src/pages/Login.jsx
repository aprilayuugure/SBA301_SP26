import { Container, Card, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login({ state, dispatch, accounts }) {
    const navigate = useNavigate();
    const {login, handleFieldChange, errors, user} = useAuth(state, dispatch, accounts);

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }
    
    return (
        <Container className = "d-flex justify-content-center align-items-center" style = {{ minHeight: '80vh'}}>
            <Card className = "p-4 shadow" style = {{ width: '400px'}}>
                <h4 className = 'text-center mb-4'>Login Form</h4>

                 <Form onSubmit = {handleSubmit}>
                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type = "text" placeholder = "Enter username" 
                                          value = {user.username} 
                                          isInvalid = {!!errors.username}
                                          onChange = {(e) => handleFieldChange('username', e.target.value)}
                            />
                            <Form.Control.Feedback type = "invalid">{errors.username}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = "password" placeholder = "Enter password" 
                                          value = {user.password} 
                                          isInvalid = {!!errors.password}
                                          onChange = {(e) => handleFieldChange('password', e.target.value)}
                            />
                             <Form.Control.Feedback type = "invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "justify-content-center mb-3">
                        <Col xs = "auto">
                            <Button variant = "secondary" type = "button" 
                                    onClick = {() => navigate(`/`)}>
                            Cancel</Button>
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