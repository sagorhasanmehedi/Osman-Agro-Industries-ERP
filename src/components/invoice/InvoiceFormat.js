import React from "react";
import {
  CardContainer,
  InvoiceBody,
} from "../../Pages/landingPage/LandingPageStyled";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";

const InvoiceFormat = ({ children }) => {
  return (
    <CardContainer
      Width="840px"
      Padding="10px 0px"
      style={{ margin: "auto", marginTop: "20px" }}
    >
      <InvoiceHeader />
      <hr style={{ margin: "0px" }} />
      <InvoiceBody>{children}</InvoiceBody>
      <InvoiceFooter />
    </CardContainer>
  );
};

export default InvoiceFormat;
