import React, { useState } from "react";

import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  InvoiceNav,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../../sale/SaleStyled";

import SharedButtonNavigation2 from "../../../components/shared/SharedButtonNavigation2";

import DipositOfficerInvoice from "../../../components/bank/bankdeposit/DipositOfficerInvoice";
import DipositCustomarInvoice from "../../../components/bank/bankdeposit/DipositCustomarInvoice";

const DepositWendowInvoice = () => {
  const navValue = ["OfficeInvoice", "CustomerInvoice"];
  const [data, setData] = useState("OfficeInvoice");

  return (
    <>
      <PlainText2>Bank Deposit Invoice</PlainText2>
      <ButtonGroupContainer
        Gap="6px"
        Shadow="none"
        Background="none"
        Possition="space-between"
      >
        <ContainerPosition Gap="10px">
          <Button>Update Deposit</Button>
        </ContainerPosition>

        <ContainerPosition Gap="10px">
          <Button>Export</Button>
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>

      <>
        <InvoiceNav>
          <SharedButtonNavigation2
            navValue={navValue}
            data={data}
            setData={setData}
          />
        </InvoiceNav>

        {data === "OfficeInvoice" && <DipositOfficerInvoice />}
        {data === "CustomerInvoice" && <DipositCustomarInvoice />}
      </>
    </>
  );
};

export default DepositWendowInvoice;
