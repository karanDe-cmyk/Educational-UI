import React from "react";
import "./Style.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header className="header_wrapper">
      <Navbar expand="lg" variant="dark" className="navbar-inverse">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand offset-md-2">
            <img className="d-inline-block " src="images/logo.png" alt="" width={80} height={70}/>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
            <Nav className="ml-auto">
                <li className="c1" >
                    <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                </li>
                <li className="c2" > 
                    <Nav.Link   as={NavLink} to="/about">About</Nav.Link>
                </li>
                <li className="c3">
                    <Nav.Link as={NavLink} to="/course">Course</Nav.Link>
                </li>
                <li className="c4">
                    <Nav.Link as={NavLink} to="/price">Price</Nav.Link>
                </li>
                <li className="c5"> 
                    <Nav.Link as={NavLink} to="/video">Video</Nav.Link> 
                </li>
                <li className="c6">
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/sidebar">Right Sidebar</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/dummy1">Dummy Link1</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/dummy2">Dummy Link2</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/dummy3">Dummy Link3</NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li className="c7">
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  );
}
