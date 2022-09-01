import React from "react";
import RolePermissionForm from "../../components/forms/RolePermissionForm";

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
    </>
  );
};

export default RolePermissionWindow;
