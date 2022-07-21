import React, { useState } from "react";
import EmployeeAccountPage from "../../../components/sales/accounts/EmployeeAccountPage";
import PartyBankAccountForm from "../../../components/sales/accounts/PartyBankAccountForm";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";

const EmployeeAccount = () => {
  const [data, setData] = useState("Employee Account Details");
  const navValue = ["Employee Account Details", "Bank Account Details"];
  return (
    <div>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Employee Account Details" && <EmployeeAccountPage />}
    </div>
  );
};

export default EmployeeAccount;
