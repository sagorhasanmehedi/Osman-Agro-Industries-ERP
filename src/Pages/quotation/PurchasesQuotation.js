import React from "react";
import { NavLink } from "react-router-dom";
import PurchaseQuotationTable from "../../components/quotation/PurchaseQuotationTable";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const PurchasesQuotation = () => {
  return (
    <>
      <PlainText2>Purchases Quotation</PlainText2>
      <ButtonGroupContainer
        Gap="6px"
        Shadow="none"
        Background="none"
        Margin="0 0 25px 0"
      >
        <NavLink to="/quotation/newpurchasequotation">
          <Button>New Purchases Quotation</Button>
        </NavLink>

        <ContainerPosition
          Margin="0px auto"
          Possition="center"
          Gap="10px"
          style={{ margin: "auto" }}
        >
          <Lavel>Start Date</Lavel>
          <Input type="Date" Width="150px" />
          <Lavel>End Date</Lavel>
          <Input type="Date" Width="150px" />
        </ContainerPosition>
        <Input
          type="search"
          placeholder="Quotation No & Customer"
          Width="250px"
          Margin="0 5px"
        />
        <Button Background="#1B253F">Export</Button>
        <Button Background="#1B253F">Print</Button>
      </ButtonGroupContainer>

      <CardContainer>
        <PurchaseQuotationTable />
      </CardContainer>
    </>
  );
};

export default PurchasesQuotation;
