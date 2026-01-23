import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

function Header( { onSearchChange }) {

  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">My Website</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as = {Link} to="/about">About</Nav.Link>
          <Nav.Link as = {Link} to="/orchid">Orchid</Nav.Link>
          <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
        </Nav>

        <div>
            <Searchbar onSearchChange = {onSearchChange} />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
