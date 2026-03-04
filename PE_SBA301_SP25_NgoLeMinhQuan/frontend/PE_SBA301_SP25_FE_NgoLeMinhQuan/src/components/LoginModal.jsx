import { Modal, Form, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

function LoginModal({ show, handleClose }) {
    const { state, handleFieldChange, login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await login(state.loginForm);

        if (success) handleClose();
    };

    return (
        <Modal show = {show} onHide = {handleClose} centered>
            <Modal.Header closeButton className = "auth-modal-header">
                <Modal.Title className = "w-100 text-center">
                    Login To Cars Management System
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit = {handleSubmit}>
                <Modal.Body className = "px-4 pb-4">

                    <Form.Group className="mb-3">
                        {state.generalError && (
                            <div className = "text-danger text-center mb-3">
                                {state.generalError}
                            </div>
                        )}

                        <Form.Label className="fw-semibold">
                            Email Address
                        </Form.Label>
                        <Form.Control
                            type = "email"
                            className = "auth-form-control"
                            value = {state.loginForm.emailAddress}
                            onChange = {(e) => handleFieldChange("loginForm", "emailAddress", e.target.value)}
                            isInvalid = {!!state.errors.emailAddress} />
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.emailAddress}
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className = "mb-4">
                        <Form.Label className = "fw-semibold">
                            Password
                        </Form.Label>
                        <Form.Control
                            type = "password"
                            className = "auth-form-control"
                            value = {state.loginForm.memberPassword}
                            onChange = {(e) => handleFieldChange("loginForm", "memberPassword", e.target.value)}
                            isInvalid = {!!state.errors.memberPassword} />
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.memberPassword}
                            </Form.Control.Feedback>
                    </Form.Group>


                    <div className = "d-flex justify-content-center">
                        <Button type = "submit" className = "w-50 auth-btn">
                            Login
                        </Button>
                    </div>

                </Modal.Body>
            </Form>
        </Modal>
    );
}

export default LoginModal;