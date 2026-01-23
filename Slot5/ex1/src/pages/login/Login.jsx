import { Container, Card, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login({ state, dispatch, accounts }) {
    const navigate = useNavigate();

    const validateLogin = (user) => {
        const foundUser = accounts.find(acc => 
            acc.username === user.username &&
            acc.password === user.password
        );

        if (!foundUser) return "Wrong credentials";

        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateLogin(state.user);

        if (error) dispatch({ type: "LOGIN_FAILURE", payload: error })
        else 
        {   
            dispatch({ type: "LOGIN_SUCCESS" });
            navigate(`/orchids`)
        }
    }
    
    return (
        <Container className = "d-flex justify-content-center align-items-center" style = {{ minHeight: '80vh'}}>
            <Card className = "p-4 shadow" style = {{ width: '400px'}}>
                <h4 className = 'text-center mb-4'>Login Form</h4>
       
                 {state.error && <Alert variant = "danger">{state.error}</Alert>}

                 <Form onSubmit = {handleSubmit}>
                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type = "text" placeholder = "Enter username" 
                                          value = {state.user.username} 
                                          onChange = {(e) => dispatch({
                                                type: 'FIELD_CHANGE',
                                                field: 'username',
                                                value: e.target.value
                                            })
                                          }
                            />
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type = "password" placeholder = "Enter password" 
                                          value = {state.user.password} 
                                          onChange = {(e) => dispatch({
                                                type: 'FIELD_CHANGE',
                                                field: 'password',
                                                value: e.target.value
                                            })
                                        }
                            />
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