// Lets start with Link basic header
// We have to import react
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Auth from "../../utils/auth";

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="dark"
        variant="dark"
        style={{
          backgroundColor: "black",
          color: "white",
          paddingBottom: "1.5%",
          paddingTop: "1.5%",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ marginRight: "25%" }}>
            Application
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/profile"></Nav.Link>
              )}
              
            </Nav>
            {Auth.loggedIn() ? (
              <>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav>
                <Nav.Link id="sign" href="/signup">
                  Sign up
                </Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                  Log in
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
// Export the header
export default Header;
