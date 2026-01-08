import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className = "bg-light px-4 py-4 mt-auto">
            <Container fluid>
                <Row className = "align-items-center">
                    <Col xs = {2}>
                        <img src="./avatar.jpg" alt="Avatar" className="rounded-circle" width="50" height="50" />
                    </Col>

                    <Col xs = {8} className = "text-center">
                        <h5>Created by: Ngo Le Minh Quan</h5>
                        <p>© 2026 All rights reserved.</p>
                    </Col>

                    <Col xs = {2}>
                        <a href="mailto:minhquaningenious@gmail.co">minhquaningenious@gmail.com</a>
                      </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
