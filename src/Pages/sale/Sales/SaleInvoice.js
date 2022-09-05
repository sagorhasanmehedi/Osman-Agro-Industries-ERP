import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaleInvoiceContainer from "../../../components/sales/sales/SaleInvoiceContainer";
import ButtonNavigation from "../../../components/shared/ButtonNavigation";
import SharedButtonNavigation2 from "../../../components/shared/SharedButtonNavigation2";
import ChallanInvoiceContainer from "../Challan/ChallanInvoiceContainer";
import DeliveryInvoice from "../Delivery/DeliveryInvoice";
import KhamContainer from "../Kham/KhamContainer";
import { PlainText2 } from "../SaleStyled";

const SaleInvoice = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const navValue = ["Add Delivery", "Add Challan", "SMS Re-Send", "Print"];
  const [data2, setData2] = useState("Invoice");
  const navValue2 = ["Invoice", "Delivery", "Challan", "Kham"];

  if (data === "Add Delivery") {
    navigation("/sale/addDelivery");
  } else if (data === "Add Challan") {
    navigation("/sale/addChallan");
  }
  return (
    <>
      <PlainText2>Sale Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation2
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Invoice" && <SaleInvoiceContainer />}
      {data2 === "Delivery" && <DeliveryInvoice />}
      {data2 === "Challan" && <ChallanInvoiceContainer />}
      {data2 === "Kham" && <KhamContainer />}
    </>
  );
};

export default SaleInvoice;
