import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import validateOrchid from "../features/auth/OrchidValidation";
import { useOrchids } from "../hooks/useOrchids";
import { useOrchidList } from "../hooks/useOrchidList";

function OrchidForm({ state, dispatch }) {
    const { id } = useParams();
    const navigate = useNavigate();
        const {checkForm, handleFieldChange, errors, orchid} = useOrchids(state, dispatch, id);

    const handleSubmit = (e) => {
        e.preventDefault();
        checkForm();
    }
    
    return (
        <Container className = "d-flex justify-content-center align-items-center" style = {{ minHeight: '80vh'}}>
            <Card className = "p-4 shadow" style = {{ width: '400px'}}>
                <Form onSubmit = {handleSubmit}>
                    <div className = "mb-3 text-center">
                        <img src = {orchid.image ? `${orchid.image}` : "/no_image.jpg"}
                             style = {{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #eee'}}
                             onError = {(e) => { e.target.src = "/no_image.jpg"}} />
                    </div>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "image">
                            <Form.Label>Image source</Form.Label>
                            <Form.Control type = "text" value = {orchid.image}
                                          onChange = {(e) => handleFieldChange('image', e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type = "text" value = {orchid.name}
                                          isInvalid = {!!errors.name} 
                                          onChange = {(e) => handleFieldChange('name', e.target.value)} />

                            <Form.Control.Feedback type = "invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type = "text" value = {orchid.description}
                                          isInvalid = {!!errors.description}
                                          onChange = {(e) => handleFieldChange('description', e.target.value)}/>
                            
                            <Form.Control.Feedback type = "invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type = "text" value = {orchid.category}
                                          isInvalid = {!!errors.category}
                                          onChange = {(e) => handleFieldChange('category', e.target.value)}/>

                            <Form.Control.Feedback type = "invalid">{errors.category}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "isSpecial">
                            <Form.Check reverse className = "d-inline-block" 
                                        type = "checkbox" label = "Is Special?"
                                        checked = {orchid.isSpecial}
                                        onChange = {(e) => handleFieldChange('isSpecial', e.target.checked)}/>
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} md = "12" controlId = "price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type = "number" step = "0.01" min = "0" placeholder = "0.00" 
                                          value = {orchid.price}
                                          isInvalid = {!!errors.price}
                                          onChange = {(e) => handleFieldChange('price', e.target.value)}/>
                            
                            <Form.Control.Feedback type = "invalid">{errors.price}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className = "justify-content-center mb-3">
                        <Col xs = "auto">
                            <Button variant = "secondary" type = "button" 
                                    onClick = {() => navigate(`/`)}>
                            Cancel</Button>
                        </Col>

                        <Col xs = "auto">
                            <Button variant = "primary" type = "submit">Save</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default OrchidForm;