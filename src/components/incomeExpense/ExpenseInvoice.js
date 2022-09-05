import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlainText2 } from "../../Pages/sale/SaleStyled";
import ButtonNavigation from "../shared/ButtonNavigation";
import SharedButtonNavigation2 from "../shared/SharedButtonNavigation2";
import ExpenceInvouceCustomerCopy from "./ExpenceInvouceCustomerCopy";
import ExpensenvoiceOfficeCopy from "./ExpensenvoiceOfficeCopy";

const ExpenseInvoice = () => {
  const [data, setData] = useState("");
  const navValue = ["Update Expense", "SMS Re-Send", "Export", "Print"];

  const [data2, setData2] = useState("Office Copy");
  const navValue2 = [ "Office Copy","Customer Copy",];

  return (
    <>
      <PlainText2>Expense Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation2
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Office Copy" && <ExpensenvoiceOfficeCopy />}
      {data2 === "Customer Copy" && <ExpenceInvouceCustomerCopy />}
    </>
  );
};

export default ExpenseInvoice;
