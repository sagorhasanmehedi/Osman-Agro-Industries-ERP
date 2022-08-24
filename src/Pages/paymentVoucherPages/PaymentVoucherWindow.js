import React from "react";
import { useNavigate } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";
import VoucherDetails from "./VoucherDetails";

const PaymentVoucherWindow = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/counter/paymentVoucherInvoice");
  };
  return (
    <>
      <PlainText2>Customer & Supplier Payment Form</PlainText2>
      <VoucherDetails handleSubmit={handleSubmit} />;
    </>
  );
};

export default PaymentVoucherWindow;
