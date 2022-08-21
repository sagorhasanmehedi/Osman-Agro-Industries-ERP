import React from "react";
import BankBookWindowTable from "../../components/report/BankBookWindowTable";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const BankBook = () => {
  return (
    <>
      <PlainText2>Bank Book Window</PlainText2>
      <ButtonGroupContainer Gap="20px" Padding="3.5px 5px">
        <Button>Start Date</Button>
        <Button>End Date</Button>

        <Input
          type="search"
          placeholder="Search"
          style={{ width: "300px", marginRight: "auto" }}
        />
        <Button>Print</Button>
      </ButtonGroupContainer>
      <BankBookWindowTable />
    </>
  );
};

export default BankBook;
