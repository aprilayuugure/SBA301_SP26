import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
    return (
        <div className = "d-flex flex-column min-vh-100">
            <Header />

            <Container fluid className = "flex-grow-1">
                <Row>
                    <Col xs = {12} md = {3} lg = {2}>
                        <Sidebar />
                    </Col>

                    <Col xs = {12} md = {9} lg = {10} className = "p-4">
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default MainLayout;