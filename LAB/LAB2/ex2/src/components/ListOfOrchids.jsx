import { Container, Row, Col } from "react-bootstrap";
import Orchid from "./Orchid";  

function ListOfOrchids( {orchids} ) {
    return (
        <Container>
        <Row xs = {1} md = {2} lg = {4} className = "g-4">
            {orchids.map( (orchid) => (
                <Col key = {orchid.id}>
                    <Orchid orchid = {orchid} />
                </Col>
            ))}
        </Row>
        </Container>
    );
}

export default ListOfOrchids;