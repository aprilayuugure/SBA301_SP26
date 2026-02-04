import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Nav className = "flex-column align-items-center h-100 p-3 border-end" style = {{ width: '240px' }}>
            <img src = "/no-image.jpg" className = "rounded-circle mb-2 mb-5" width = "125" height = "125"></img>

            <Nav.Link as = {Link} to = "/dashboard">Dashboard</Nav.Link>
            <Nav.Link as = {Link} to = "/categories">Categories</Nav.Link>
            <Nav.Link as = {Link} to = "/news">News</Nav.Link>
            <Nav.Link as = {Link} to = "/users">Users</Nav.Link>
            <Nav.Link as = {Link} to = "/settings">Settings</Nav.Link>
        </Nav>
    )
}

export default Sidebar;
