import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(40, 54, 90, 0.8);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 5px 20px;
  margin: 4px;
  text-decoration: none;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
`;

const SidebarLabel = styled.span`
  margin: 0px 16px;
  color: "red";
`;

const DropdownLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(40, 54, 90, 0.8);
  // box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 5px 20px;
  margin: 4px;
  text-decoration: none;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
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
            <div style={{ background: "#F2F2F2" }}>
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
