import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer( {avatar, user}) {
    const { firstName, lastName, email, phone } = user;
    const name = `${firstName} ${lastName}`;

    return (
        <footer className = "bg-light px-4 py-4 mt-auto">
            <Container fluid>
                <Row className = "align-items-center">
                    <Col xs = {2}>
                        <Image src = {avatar} alt="Avatar" className="rounded-circle" width="50" height="50" />
                    </Col>

                    <Col xs = {8} className = "text-center">
                        <h5>Created by: {name}</h5>
                        <p className = "mb-0">Contact me at: {phone}</p>
                        <p className = "mb-0">2026. All rights reserved.</p>
                    </Col>

                    <Col xs = {2}>
                        <a href={`mailto:${email}`}>{email}</a>
                      </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
