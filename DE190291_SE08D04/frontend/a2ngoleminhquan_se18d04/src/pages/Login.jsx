import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import "../css/login.css";

function Login () {
    return (
        <div className = "login">
            <div className = "login-overlay">
                <div className = "login-content">
                    <Container className = "d-flex justify-content-center align-items-center min-vh-100"> 
                        <Card className = "login-card p-4 shadow">
                            <Card.Title className = "text-center mb-4">Login Form</Card.Title>
                                <Form>
                                    <Row className = "mb-3">
                                        <Form.Group as = {Col} md = "12">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type = "text"></Form.Control>
                                        </Form.Group>
                                    </Row>

                                    <Row className = "mb-3" md = "12">
                                        <Form.Group as = {Col}>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type = "password"></Form.Control>
                                        </Form.Group>
                                    </Row>

                                    <Row className = "justify-content-center mb-3">
                                        <Col xs = "auto">
                                            <Button>Login</Button>
                                        </Col>
                                    </Row>
                                </Form>
                        </Card>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Login;