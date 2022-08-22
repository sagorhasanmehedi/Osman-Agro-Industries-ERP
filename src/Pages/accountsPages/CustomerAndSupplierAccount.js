import React, { useState } from "react";
import PartyAccountForm from "../../components/accounts/PartyAccountForm";
import PartyBankAccountForm from "../../components/accounts/PartyBankAccountForm";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";

const CustomerAndSupplierAccount = () => {
  const [data, setData] = useState("Party Account Details");
  const navValue = ["Party Account Details", "Bank Account Details"];
  return (
    <div>
      <SharedButtonNavigation2
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
