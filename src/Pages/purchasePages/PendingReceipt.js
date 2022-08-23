import React from "react";
import ManagePenddingReceiptList from "../../components/sales/purchase/ManagePenddingReceiptList";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const PendingReceipt = () => {
  return (
    <>
      <PlainText2>Manage Pendding Receipt</PlainText2>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Lavel>Start Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />
        <Lavel>End Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />
        <Button style={{ marginRight: "auto" }}>Search</Button>
        <Input type="search" placeholder="Invoice Search" Width="250px" />
      </ButtonGroupContainer>
      <CardContainer>
        <ManagePenddingReceiptList />
      </CardContainer>
    </>
  );
};

export default PendingReceipt;
