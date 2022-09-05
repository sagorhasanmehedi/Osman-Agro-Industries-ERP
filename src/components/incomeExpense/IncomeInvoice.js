import React, { useState } from "react";
import { PlainText2 } from "../../Pages/sale/SaleStyled";
import ButtonNavigation from "../shared/ButtonNavigation";
import SharedButtonNavigation2 from "../shared/SharedButtonNavigation2";
import IncomeInvoiceCustomerCopy from "./IncomeInvoiceCustomerCopy";
import IncomeInvoiceOfficeCopy from "./IncomeInvoiceOfficeCopy";

const IncomeInvoice = () => {
  const [data, setData] = useState("");
  const navValue = ["Update Expense", "SMS Re-Send", "Export", "Print"];

  const [data2, setData2] = useState("Office Copy");
  const navValue2 = ["Office Copy", "Customer Copy"];

  return (
    <>
      <PlainText2>Income Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation2
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Office Copy" && <IncomeInvoiceOfficeCopy />}
      {data2 === "Customer Copy" && <IncomeInvoiceCustomerCopy />}
    </>
  );
};

export default IncomeInvoice;
