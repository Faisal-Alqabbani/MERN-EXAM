import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-between"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>Pet Shelter</Navbar.Brand>
        </Link>

        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/new">Add a pet to a Shelter</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
