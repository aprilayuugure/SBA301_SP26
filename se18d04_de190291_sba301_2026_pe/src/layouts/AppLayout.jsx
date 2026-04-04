import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar bg="light" expand="sm" className="border-bottom mb-3">
        <Container>
          <Navbar.Brand as={NavLink} to="/" end>
            Shoes
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shoes/add">
              Add
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AppLayout;
