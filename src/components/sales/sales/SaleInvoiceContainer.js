import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonGroupContainer,
  InvoiceNav,
} from "../../../Pages/landingPage/LandingPageStyled";
import SharedButtonNavigation2 from "../../shared/SharedButtonNavigation2";
import InvoiceCustomerCopy from "./InvoiceCustomerCopy";
import InvoiceOfficeCopy from "./InvoiceOfficeCopy";

const SaleInvoiceContainer = () => {
  const navValue = ["OfficeInvoice", "CustomerInvoice"];
  const [data, setData] = useState("OfficeInvoice");

  return (
    <>
      <InvoiceNav>
        <SharedButtonNavigation2
          navValue={navValue}
          data={data}
          setData={setData}
        />
      </InvoiceNav>

      {data === "OfficeInvoice" && <InvoiceOfficeCopy />}
      {data === "CustomerInvoice" && <InvoiceCustomerCopy />}
    </>
  );
};

export default SaleInvoiceContainer;
