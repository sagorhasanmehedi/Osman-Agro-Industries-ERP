import React, { useState } from "react";
import BankAccountForm from "../../components/sales/accounts/BankAccountForm";
import IncomeExpenseForm from "../../components/sales/accounts/IncomeExpenseForm";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import CustomerAndSupplierAccount from "./allAccountsPage/CustomerAndSupplierAccount";
import EmployeeAccount from "./allAccountsPage/EmployeeAccount";
import { PlainText2 } from "./SaleStyled";

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
