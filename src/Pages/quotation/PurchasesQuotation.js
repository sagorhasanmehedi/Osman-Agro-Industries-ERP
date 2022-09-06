import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PurchaseQuotationTable from "../../components/quotation/PurchaseQuotationTable";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
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
  const [data, setData] = useState("Party Account");
  const navValue = [
    "Party Account",
    "Income-Expense Account",
    "Bank Account",
    "Employee Account",
  ];

  return (
    <>
      <PlainText2>Purchases Quotation</PlainText2>
      <ButtonGroupContainer
        Gap="6px"
        Shadow="none"
        Background="none"
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
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />

      <CardContainer>
        <PurchaseQuotationTable />
      </CardContainer>
    </>
  );
};

export default PurchasesQuotation;
