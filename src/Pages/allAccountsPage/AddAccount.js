import React, { useState } from "react";
import { PlainText2 } from "../sale/SaleStyled";
import CustomerAndSupplierAccount from "./CustomerAndSupplierAccount";
import EmployeeAccount from "./EmployeeAccount";
import BankAccountForm from "../../components/accounts/BankAccountForm";
import IncomeExpenseForm from "../../components/accounts/IncomeExpenseForm";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";

const AddAccount = () => {
  const [data, setData] = useState("Customer & Supplier Account");
  const navValue = [
    "Customer & Supplier Account",
    "Employee Account",
    "Bank Account",
    "Income-Expense Account",
  ];
  return (
    <div>
      <PlainText2>Add Account</PlainText2>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Customer & Supplier Account" && <CustomerAndSupplierAccount />}
      {data === "Employee Account" && <EmployeeAccount />}
      {data === "Bank Account" && <BankAccountForm />}
      {data === "Income-Expense Account" && <IncomeExpenseForm />}
    </div>
  );
};

export default AddAccount;
