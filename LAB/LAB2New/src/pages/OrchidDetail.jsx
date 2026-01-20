import {Container, Col, Row, Button} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import orchids from '../data/Orchids';

function OrchidDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const orchid = orchids.find(orchid => orchid.id === parseInt(id));

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
                        <p>Category: {orchid.category}</p>
                        <p>{orchid.description}</p>
                        <p style = {{color: 'red', fontWeight: 'bold'}} >Price: ${orchid.price.toFixed(2)}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default OrchidDetail;