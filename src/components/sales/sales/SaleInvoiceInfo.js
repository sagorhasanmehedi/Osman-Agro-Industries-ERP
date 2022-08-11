import React from "react";
import { Table } from "react-bootstrap";
import { PlainText } from "../../../Pages/landingPage/LandingPageStyled";

const SaleInvoiceInfo = () => {
  return (
    <div>
      <PlainText>Invoice No : </PlainText>
      <PlainText>Billing Date :</PlainText>
      <PlainText>Billing No : </PlainText>
      <PlainText>Created By :</PlainText>
      <PlainText>Status :</PlainText>
    </div>
  );
};

export default SaleInvoiceInfo;
