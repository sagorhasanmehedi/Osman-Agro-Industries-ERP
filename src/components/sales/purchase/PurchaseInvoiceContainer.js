import React, { useState } from "react";
import {
  Button,
  ButtonGroupContainer,
} from "../../../Pages/landingPage/LandingPageStyled";
import PurchaseOfficeInvoice from "./PurchaseOfficeInvoice";

const PurchaseInvoiceContainer = () => {
  const [data, setData] = useState("OfficeInvoice");
  return (
    <>
      <ButtonGroupContainer Possition="space-between">
        <Button>Purchase Invoice</Button>

        <Button
          style={{
            color: data === "OfficeInvoice" && "black",
            background: data === "OfficeInvoice" && "gray",
          }}
          onClick={() => setData("OfficeInvoice")}
        >
          Office Copy
        </Button>
        <Button
          style={{
            color: data === "CustomerInvoice" && "black",
            background: data === "CustomerInvoice" && "gray",
          }}
          onClick={() => setData("CustomerInvoice")}
        >
          Customer Copy
        </Button>
      </ButtonGroupContainer>
      {data === "OfficeInvoice" && <PurchaseOfficeInvoice />}
      {data === "CustomerInvoice" && ""}
    </>
  );
};

export default PurchaseInvoiceContainer;
