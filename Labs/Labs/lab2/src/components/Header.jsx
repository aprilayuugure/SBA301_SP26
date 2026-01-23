import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header( { onSearchChange, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  return (
    <Navbar bg = "light" sticky = "top">
      <Container>
        <Navbar.Brand as={Link} to="/">Orchid Store</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as = {Link} to="/orchids">Home</Nav.Link>
          <Nav.Link as = {Link} to="/about">About</Nav.Link>
          <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
        </Nav>

        <div>
            <Searchbar onSearchChange = {onSearchChange} />
        </div>

        {isLoggedIn ? (
          <Button variant = "secondary" className = "mx-3" onClick = {onLogout}>Logout</Button>
        ) : 
          <Button variant = "primary" className = "mx-3" onClick = {() => navigate(`/login`)}>Login</Button>
        }
      </Container>
    </Navbar>
  );
}

export default Header;
