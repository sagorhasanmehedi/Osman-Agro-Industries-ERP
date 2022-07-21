import React, { useState } from "react";
import SharedButtonNavigation from "../../shared/SharedButtonNavigation";
import EmployeeAccountForm from "./EmployeeAccountForm";
import LoginInfoForm from "./LoginInfoForm";
import SalaryInfoForm from "./SalaryInfoForm";

const EmployeeAccountPage = () => {
  const [data, setData] = useState("Basic Info");
  const navValue = [
    "Basic Info",
    "Biographical Info",
    "Salary Info",
    "Login Info",
  ];
  return (
    <div>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Basic Info" && <EmployeeAccountForm />}
      {data === "Salary Info" && <SalaryInfoForm />}
      {data === "Login Info" && <LoginInfoForm />}
    </div>
  );
};

export default EmployeeAccountPage;
