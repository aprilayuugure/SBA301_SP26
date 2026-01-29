import {Container, Col, Row, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrchid } from '../hooks/useOrchid';
import { useOrchids } from '../hooks/useOrchids';

function OrchidDetail({state, dispatch}) {
    const {id} = useParams();
    const navigate = useNavigate();
    const orchid = useOrchid(id);
    const { deleteOrchid } = useOrchids(state, dispatch);

    if (!orchid) {
        return (
            <div className = "text-center mt-5">
                <h3>Information not available</h3>
            </div>
        )
    }    
    else {
        return (
            <Container className = "mt-3">
                <Row className = "mb-4 justify-content-center">
                    <Col xs = "auto">
                            <Button variant = "primary" onClick={() => navigate(`/orchids`)}>Return</Button>   
                    </Col>
                </Row>

                <Row>
                    <Col md = {6} className = "d-flex justify-content-center align-items-center">
                        <img src = {orchid.image} style = {{width: '400px', height: '400px'}} alt = {orchid.name} />
                    </Col>

                    <Col md = {6}>
                        <h2>{orchid.name}</h2>
                        <p>{orchid.description}</p>
                        <p>Category: {orchid.category.name}</p>
                        <p>Is Special: {orchid.isSpecial ? "Yes" : "No"}</p>
                        <p style = {{color: 'red', fontWeight: 'bold'}} >Price: ${orchid.price}</p>
                        
                        <Button className = "border-0 me-2" style = {{backgroundColor: 'blue'}} type = "button"
                                onClick = {() => navigate(`/orchid/update/${id}`)}>
                        Update</Button>

                        <Button className = "border-0" style = {{backgroundColor: 'red'}} type = "button"
                                onClick = {() => deleteOrchid(id)}>
                        Delete</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default OrchidDetail;