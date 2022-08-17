import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonGroupContainer,
} from "../../../Pages/landingPage/LandingPageStyled";
import SharedButtonNavigation from "../../shared/SharedButtonNavigation";
import InvoiceCustomerCopy from "./InvoiceCustomerCopy";
import InvoiceOfficeCopy from "./InvoiceOfficeCopy";

const SaleInvoiceContainer = () => {
  const navValue = ["OfficeInvoice", "CustomerInvoice"];
  const [data, setData] = useState("OfficeInvoice");

  return (
    <>
      <div style={{ width: "840px", margin: "auto", marginTop: "40px" }}>
        <SharedButtonNavigation
          navValue={navValue}
          data={data}
          setData={setData}
        />
      </div>

      {data === "OfficeInvoice" && <InvoiceOfficeCopy />}
      {data === "CustomerInvoice" && <InvoiceCustomerCopy />}
    </>
  );
};

export default SaleInvoiceContainer;
