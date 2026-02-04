import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import "../css/header.css";

function Header() {
    return (
        <Navbar className = "header-navbar">
            <Container>
                <Navbar.Brand as = {Link} to = "/">
                    <img src = "/logo.png" height = "60px"></img>
                </Navbar.Brand>

                <Navbar.Collapse className = "justify-content-end gap-2">
                    <Searchbar />
                    <Button className = "login-btn" as = {Link} to = "/login">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;