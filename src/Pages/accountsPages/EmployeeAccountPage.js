import React, { useState } from "react";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";
import EmployeeAccountForm from "../../components/accounts/EmployeeAccountForm";
import LoginInfoForm from "../../components/accounts/LoginInfoForm";
import SalaryInfoForm from "../../components/accounts/SalaryInfoForm";
import BialogycalForm from "../../components/accounts/BialogycalForm";

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
      <SharedButtonNavigation2
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Basic Info" && <EmployeeAccountForm />}
      {data === "Biographical Info" && <BialogycalForm />}
      {data === "Salary Info" && <SalaryInfoForm />}
      {data === "Login Info" && <LoginInfoForm />}
    </div>
  );
};

export default EmployeeAccountPage;
