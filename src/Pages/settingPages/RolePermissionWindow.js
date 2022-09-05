import React from "react";
import RolePermissionForm from "../../components/forms/RolePermissionForm";
import { Button, ContainerPosition } from "../landingPage/LandingPageStyled";

const RolePermissionWindow = () => {
  const Home = [
    "Party Account",
    "Khat Account",
    "Bank Account",
    "Employee Account",
  ];

  return (
    <>
      <RolePermissionForm HeadName="Home" data={Home} />
      <RolePermissionForm HeadName="Sale" data={Home} />
      <RolePermissionForm HeadName="Product" data={Home} />
      <RolePermissionForm HeadName="Purchase" data={Home} />
      <RolePermissionForm HeadName="Queatation" data={Home} />
      <RolePermissionForm HeadName="Marketing" data={Home} />
      <RolePermissionForm HeadName="production" data={Home} />
      <RolePermissionForm HeadName="Stock" data={Home} />
      <RolePermissionForm HeadName="Return" data={Home} />
      <RolePermissionForm HeadName="Report" data={Home} />
      <RolePermissionForm HeadName="Supplier" data={Home} />
      <RolePermissionForm HeadName="Accounts" data={Home} />
      <RolePermissionForm HeadName="Bank" data={Home} />
      <RolePermissionForm HeadName="Tax" data={Home} />
      <RolePermissionForm HeadName="Human Resourcex" data={Home} />
      <RolePermissionForm HeadName="Commision" data={Home} />
      <RolePermissionForm HeadName="Settings" data={Home} />
      <ContainerPosition Margin="20px 0px">
        <Button Padding="10px 40px">Save</Button>
      </ContainerPosition>
    </>
  );
};

export default RolePermissionWindow;
