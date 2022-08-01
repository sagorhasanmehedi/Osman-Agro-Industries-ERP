import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarLabel = styled.span`
  margin: 0px 16px;
`;

const DropdownLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: "0px 270px";
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
            <div style={{ background: "#21454d" }}>
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
