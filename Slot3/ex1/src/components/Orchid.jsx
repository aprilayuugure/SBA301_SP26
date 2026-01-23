import {Container, Row, Col, Button, Card} from 'react-bootstrap';

function Orchid ( {name, image, description, category, isSpecial} ) {
    return (
        <Container>
            <Row>
                <Col>  
                    <Card className="w-25 p-3 mx-auto">
                    <Card.Img variant = "top" src = {image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Category: {category}</Card.Text>
                        <Card.Text>
                            Is Special? :
                                <span className = {isSpecial ? "fw-bold text-success" : "fw-bold text-danger"}>
                                    {" "}{isSpecial ? "Yes" : "No"}
                                </span>
                        </Card.Text>
                    </Card.Body>  

                    <Button variant = "primary" className = "d-block mx-auto w-50">Detail</Button>
                    </Card> 
                </Col>
            </Row>
        </Container>
    )
}

export default Orchid;