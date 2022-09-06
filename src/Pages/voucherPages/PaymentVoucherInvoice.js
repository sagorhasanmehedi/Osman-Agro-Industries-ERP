import React, { useState } from "react";
import SaleInvoiceContainer from "../../components/sales/sales/SaleInvoiceContainer";
import ButtonNavigation from "../../components/shared/ButtonNavigation";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import { PlainText2 } from "../sale/SaleStyled";

const PaymentVoucherInvoice = () => {
  const [data, setData] = useState("");
  const navValue = ["Print"];
  const [data2, setData2] = useState("Invoice");
  const navValue2 = ["Invoice", "Transaction History"];

  return (
    <>
      <PlainText2>Received Voucher Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />

      {data2 === "Invoice" && <SaleInvoiceContainer />}
    </>
  );
};
export default PaymentVoucherInvoice;
