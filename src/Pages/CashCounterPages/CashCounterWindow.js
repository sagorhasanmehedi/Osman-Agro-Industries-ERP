import React from "react";
import CashCounterList from "../../components/CashCounterComponents/CashCounterList";
import {
  ButtonGroupContainer,
  Input,
  Lavel,
  Select,
  Button,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const CashCounterWindow = () => {
  return (
    <>
      <PlainText2>Cash Counter Window </PlainText2>
      <FilterSection />
      <CashCounterList />
    </>
  );
};

export default CashCounterWindow;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px">
      <Lavel>Start Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Lavel>Start Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Input
        type="text"
        placeholder="Barcode type and id search"
        Width="250px"
      />

      <Select Width="150px">
        <option>type</option>
        <option>type</option>
        <option>type</option>
        <option>type</option>
      </Select>
      <Button Padding="10px 40px">Search</Button>
      <Button Padding="10px 40px" style={{ marginLeft: "auto" }}>
        Print
      </Button>
    </ButtonGroupContainer>
  );
}
