import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header( { state, dispatch, onSearchChange }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate(`/login`);
  }

  return (
    <Navbar bg = "light" sticky = "top">
      <Container>
        <Navbar.Brand as={Link} to="/">Orchid Store</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as = {Link} to = "/orchids" className = "me-3">Home</Nav.Link>
          <Nav.Link as = {Link} to = "/about" className = "me-3">About</Nav.Link>
          <Nav.Link as = {Link} to = "/contact" className = "me-3">Contact</Nav.Link>
          <Nav.Link as = {Link} to = "orchid/add">Add Orchid</Nav.Link>
        </Nav>

        <div>
            <Searchbar onSearchChange = {onSearchChange} />
        </div>

        {!state.isAuthenticated ? (
          <Button variant = "primary" className = "mx-3" onClick = {() => navigate(`/login`)}>Login</Button>
        ) : (
          <Button variant = "secondary" className = "mx-3" onClick = {handleLogout}>Logout</Button>
          )
        }
      </Container>
    </Navbar>
  );
}

export default Header;
