import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HeaderName, SelfContainer } from "../landingPage/LandingPageStyled";
import Avatar from "react-avatar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const handleSubmit = () => {
    setData(!data);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        <div id="sidebar-wrapper" style={{ marginLeft: data && "0rem" }}>
          <div className="sidebar-heading text-center primary-text fs-4 fw-bold text-uppercase">
            HRM Project
          </div>
          <div className="list-group list-group-flush text-start">
            {/*  <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
      */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>

        <div id="page-content-wrapper">
          <Navbar
            bg="light"
            expand="lg"
            className="px-3"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Nav>
              <i
                className="fas fa-align-left primary-text fs-4 me-4 toggle-icon"
                onClick={handleSubmit}
                style={{ alignSelf: "center" }}
              ></i>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <HeaderName Padding="0px" FontWeight="500" FontSize="16px">
                  Time: 06:07 AM
                </HeaderName>
                <HeaderName Padding="0px" FontWeight="500" FontSize="16px">
                  Date: 19-08-2022
                </HeaderName>
              </div>
            </Nav>

            <Nav>
              <SelfContainer
                Direction="row"
                Gap="10px"
                style={{ alignSelf: "center" }}
              >
                <span
                  style={{
                    border: "1px solid #5B82FD",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#5B82FD",
                  }}
                >
                  Eng
                  <RiArrowDropDownLine size={20} />
                </span>

                <span
                  style={{
                    border: "1px solid #5B82FD",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#5B82FD",
                  }}
                >
                  {/* <FiSettings /> */}
                  Menu
                </span>
              </SelfContainer>

              <Avatar
                name="Wim Mostmans"
                size="55px"
                round={true}
                style={{ marginLeft: "20px" }}
                onClick={handleClick}
              />
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