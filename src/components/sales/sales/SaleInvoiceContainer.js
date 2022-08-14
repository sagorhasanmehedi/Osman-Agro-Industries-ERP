import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonGroupContainer,
} from "../../../Pages/landingPage/LandingPageStyled";
import InvoiceCustomerCopy from "./InvoiceCustomerCopy";
import InvoiceOfficeCopy from "./InvoiceOfficeCopy";

const SaleInvoiceContainer = () => {
  const [data, setData] = useState("OfficeInvoice");
  return (
    <>
      <ButtonGroupContainer Padding="0px" BorderRadius="none">
        <ButtonGroup
          style={{
            color: data === "OfficeInvoice" && "black",
            background: data === "OfficeInvoice" && "gray",
          }}
          onClick={() => setData("OfficeInvoice")}
        >
          Office Copy
        </ButtonGroup>
        <ButtonGroup
          style={{
            color: data === "CustomerInvoice" && "black",
            background: data === "CustomerInvoice" && "gray",
          }}
          onClick={() => setData("CustomerInvoice")}
        >
          Customer Copy
        </ButtonGroup>
      </ButtonGroupContainer>
      {data === "OfficeInvoice" && <InvoiceOfficeCopy />}
      {data === "CustomerInvoice" && <InvoiceCustomerCopy />}
    </>
  );
};

export default SaleInvoiceContainer;
