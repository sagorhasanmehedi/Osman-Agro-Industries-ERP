import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PurchaseInvoiceContainer from "../../../components/sales/purchase/PurchaseInvoiceContainer";
import ButtonNavigation from "../../../components/shared/ButtonNavigation";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";
import { PlainText2 } from "../../sale/SaleStyled";

const PurchaseInvoice = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const navValue = [
    "Update Purchase",
    "Update Receipt",
    "SMS Re-Send",
    "Export",
    "Print",
  ];
  const [data2, setData2] = useState("Invoice");
  const navValue2 = [
    "Invoice",
    "Receipt",
    "Challan",
    "Transaction",
    " History",
    "Document",
  ];

  if (data === "Update Sale") {
    navigation("/purchase/updateSale");
  } else if (data === "Add Delivery") {
    navigation("/purchase/addDelivery");
  } else if (data === "Add Challan") {
    navigation("/purchase/addChallan");
  }
  return (
    <>
      <PlainText2>Purchase Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Invoice" && <PurchaseInvoiceContainer />}
    </>
  );
};

export default PurchaseInvoice;
