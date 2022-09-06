import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaleInvoiceContainer from "../../components/sales/sales/SaleInvoiceContainer";
import ButtonNavigation from "../../components/shared/ButtonNavigation";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";
import ChallanInvoiceContainer from "../sale/Challan/ChallanInvoiceContainer";
import DeliveryInvoice from "../sale/Delivery/DeliveryInvoice";
import KhamContainer from "../sale/Kham/KhamContainer";
import { PlainText2 } from "../sale/SaleStyled";

const PurchaseInvoice = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const navValue = [
    "Update Purchase",
    "Add Receipt",
    "SMS Re-Send",
    "Export",
    "Print",
  ];
  const [data2, setData2] = useState("Invoice");
  const navValue2 = ["Invoice", "Receipt", "Challan", "Kham", "Transaction"];

  if (data === "Add Receipt") {
    navigation("/purchase/addreceipt");
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
      {data2 === "Invoice" && <SaleInvoiceContainer />}
      {data2 === "Receipt" && <DeliveryInvoice />}
      {data2 === "Challan" && <ChallanInvoiceContainer />}
      {data2 === "Kham" && <KhamContainer />}
    </>
  );
};

export default PurchaseInvoice;
