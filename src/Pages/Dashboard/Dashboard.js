import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  const [data, setData] = useState(false);
  const handleSubmit = () => {
    setData(!data);
  };

  let activeStyle = {
    backgroundColor: "#7bc0ce",
    borderLeft: "2px solid white",
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}
        <div id="sidebar-wrapper" style={{ marginLeft: data && "0rem" }}>
          <div className="sidebar-heading text-center py-3 primary-text fs-4 fw-bold text-uppercase border-bottom">
            HRM Project
          </div>
          <div className="list-group list-group-flush my-3 text-start">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="sale"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sale
            </NavLink>
            <NavLink
              to="home1"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Admin
            </NavLink>
            <NavLink
              to="home3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Product
            </NavLink>
          </div>
        </div>
        {/* #sidebar-wrapper*/}

        {/*  Page Content */}
        <div id="page-content-wrapper">
          <Navbar bg="light" expand="lg" className="px-3">
            <i
              className="fas fa-align-left primary-text fs-4 me-4 toggle-icon"
              onClick={handleSubmit}
            ></i>
            <Nav className="ms-auto">
              <NavDropdown
                title="Profile"
                // id="basic-nav-dropdown"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginRight: "80px",
                  padding: "7px 0px",
                }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>

          {/* Dashboard Main Content  */}
          <Container fluid style={{ padding: "10px" }}>
            <Outlet />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
