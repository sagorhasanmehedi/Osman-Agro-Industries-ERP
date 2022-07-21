import React, { useState } from "react";
import PartyAccountForm from "../../../components/sales/accounts/PartyAccountForm";
import PartyBankAccountForm from "../../../components/sales/accounts/PartyBankAccountForm";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";

const CustomerAndSupplierAccount = () => {
  const [data, setData] = useState("Party Account Details");
  const navValue = ["Party Account Details", "Bank Account Details"];
  return (
    <div>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "Party Account Details" ? (
        <PartyAccountForm />
      ) : (
        <PartyBankAccountForm />
      )}
    </div>
  );
};

export default CustomerAndSupplierAccount;
