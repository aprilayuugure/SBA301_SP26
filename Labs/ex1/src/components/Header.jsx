import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>

        <Nav className="me-auto gap-3">
          <span>About</span>
          <span>Contact</span>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
