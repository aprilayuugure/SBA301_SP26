import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className = "px-4 py-4 mt-auto">
            <Container>
                <Row className = "justify-content-center align-items-center text-center g-5">
                    <Col xs = "auto">
                        <img src = "/media/instagram.png" style = {{ width: '30px'}}/>
                    </Col>

                    <Col xs = "auto">
                        <img src = "/media/facebook.png" style = {{ width: '30px'}}/>
                    </Col>

                    <Col xs = "auto">
                        <img src = "/media/x.png" style = {{ width: '30px'}}/>
                    </Col>
                </Row>

                <Row className = "justify-content-center mt-3">
                    <Col xs = "auto">
                        <p>@2026. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;