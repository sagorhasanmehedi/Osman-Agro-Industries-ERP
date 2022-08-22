import React, { useState } from "react";
import EmployeeAccountPage from "./EmployeeAccountPage";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";

const EmployeeAccount = () => {
  const [data, setData] = useState("Employee Account Details");
  const navValue = ["Employee Account Details", "Bank Account Details"];
  return (
    <div>
      <SharedButtonNavigation2
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Employee Account Details" && <EmployeeAccountPage />}
    </div>
  );
};

export default EmployeeAccount;
