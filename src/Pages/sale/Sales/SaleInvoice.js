import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaleInvoiceContainer from "../../../components/sales/sales/SaleInvoiceContainer";
import ButtonNavigation from "../../../components/shared/ButtonNavigation";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";
import ChallanInvoice from "../Challan/ChallanInvoice";
import DeliveryInvoiceDelivery from "../Delivery/DeliveryInvoiceDelivery";
import KhamContainer from "../Kham/KhamContainer";
import { PlainText2 } from "../SaleStyled";

const SaleInvoice = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const navValue = [
    "Update Sale",
    "Add Delivery",
    "Add Challan",
    "SMS Re-Send",
    "Export",
    "Print",
    "Report Issu",
  ];
  const [data2, setData2] = useState("Invoice");
  const navValue2 = [
    "Invoice",
    "Delivery",
    "Challan",
    "Kham",
    "Transaction",
    " History",
    "Document",
  ];

  if (data === "Update Sale") {
    navigation("/dashboard/updateSale");
  } else if (data === "Add Delivery") {
    navigation("/dashboard/addDelivery");
  } else if (data === "Add Challan") {
    navigation("/dashboard/addChallan");
  }
  return (
    <>
      <PlainText2>Sale Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Invoice" && <SaleInvoiceContainer />}
      {data2 === "Delivery" && <DeliveryInvoiceDelivery />}
      {data2 === "Challan" && <ChallanInvoice />}
      {data2 === "Kham" && <KhamContainer />}
    </>
  );
};

export default SaleInvoice;
