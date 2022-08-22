import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins";
  color: #ffffff;
  box-shadow: 0px 0px 4px rgba(79, 188, 245, 0.48);
  border-radius: 6px;
  padding: 5px 20px;
  margin: 4px;
  text-decoration: none;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 400;
`;

const SidebarLabel = styled.span`
  margin: 0px 16px;
  color: "red";
`;

const DropdownLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  border-radius: 6px;
  padding: 5px 20px;
  margin: 4px;
  text-decoration: none;
  font-size: 12px;
  text-transform: capitalize;
  font-weight: 400;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <span style={{ padding: "3px 0px 3px 0px" }}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </span>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div style={{ background: "#283966" }}>
              <DropdownLink to={item.path} key={index}>
                <span style={{ padding: "3px 0px 3px 20px" }}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </span>
              </DropdownLink>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;