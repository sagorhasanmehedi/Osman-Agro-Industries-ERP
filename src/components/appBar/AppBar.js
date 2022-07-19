import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AppBar.css";
const data = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/",
    name: "Suspense",
  },
  {
    path: "/",
    name: "Home",
  },
];

function AppBar() {
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {data.map((item, index) => (
              <NavLink to={item.path} key={index} className="list_item">
                {item.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
