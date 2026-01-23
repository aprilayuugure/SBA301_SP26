import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Contact( {userInfo, onUserChange} ) {
    const [user, setUser] = useState({...userInfo});
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(user.firstName)) {
            newErrors.firstName = true;
        }

        if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(user.lastName)) {
            newErrors.lastName = true;
        }

        if (!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.com$/.test(user.email)) {
            newErrors.email = true;
        }

        if (!/^\d{10}$/.test(user.phone)) {
            newErrors.phone = true;
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0 && checked) {
            if (onUserChange) onUserChange(user);
            alert('Form submitted successfully!');
        }
    };

    const handleChange = (field, value) => {
        setUser({ ...user, [field]: value });
        setErrors({ ...errors, [field]: undefined });
    }
    
    return (
        <Form noValidate validated = {validated} onSubmit = {handleSubmit}>
            <Row className = "mb-3">
                <Form.Group as = {Col} md = "6" controlId = "firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type = "text" placeholder = "First name"
                                  value = {user.firstName} 
                                  onChange = {(e) => handleChange("firstName", e.target.value)}
                                  isInvalid = {!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as = {Col} md = "6" controlId = "lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type = "text" placeholder = "Last name" 
                                  value = {user.lastName}
                                  onChange = {(e) => handleChange("lastName", e.target.value)}
                                  isInvalid = {!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid last name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className = "mb-3">
                <Form.Group as = {Col} md = "12" controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type = "email" placeholder = "Email" 
                                  value = {user.email}
                                  onChange = {(e) => handleChange("email", e.target.value)}
                                  isInvalid = {!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className = "mb-3">
                <Form.Group as = {Col} md = "12" controlId = "phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type = "tel" placeholder = "Phone" 
                                  value = {user.phone}    
                                  onChange = {(e) => handleChange("phone", e.target.value)}
                                  isInvalid = {!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Form.Group className = "mb-3" controlId = "confirm">
                <Form.Check required type = "checkbox" label = "I agree to the terms and conditions" 
                            checked = {checked} onChange = {(e) => setChecked(e.target.checked)} 
                />
            </Form.Group>

            <Button type = "submit" disabled = {!checked}>Submit</Button>
        </Form>
    )
}

export default Contact;
