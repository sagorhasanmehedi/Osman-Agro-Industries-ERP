import React from "react";
import {
  ButtonGroupContainer,
  PlainText,
} from "../../Pages/landingPage/LandingPageStyled";
import barcode from "../../assets/barcode.png";
const InvoiceBarcode = ({
  invoiceName = "Invoice",
  copyName = "Office Copy",
}) => {
  return (
    <ButtonGroupContainer Possition="space-between" Shadow="none">
      <PlainText Padding="10px 40px" Border="1px solid black">
        {invoiceName}
      </PlainText>
      <img
        src={barcode}
        alt="barcode"
        style={{ height: "50px", width: "150px" }}
      />
      <PlainText Padding="10px 40px" Border="1px solid black">
        {copyName}
      </PlainText>
    </ButtonGroupContainer>
  );
};

export default InvoiceBarcode;
