import React from "react";
import { useNavigate } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";
import VoucherDetails from "./VoucherDetails";

const ReceivedVoucherWindow = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/counter/receivedVoucherInvoice");
  };
  return (
    <>
      <PlainText2>Customer & Supplier Received Form</PlainText2>
      <VoucherDetails handleSubmit={handleSubmit} />;
    </>
  );
};

export default ReceivedVoucherWindow;
