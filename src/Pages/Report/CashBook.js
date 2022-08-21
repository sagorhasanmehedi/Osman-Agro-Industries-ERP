import React from "react";
import CashBookWindowTable from "../../components/report/CashBookWindowTable";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const CashBook = () => {
  return (
    <>
      <PlainText2>Cash Book Window</PlainText2>
      <ButtonGroupContainer Gap=" 20px">
        <Button>Start Date</Button>
        <Button>End Date</Button>
        <ContainerPosition Margin="0px auto" Possition="center" Gap="10px">
          <Select Width="200px">
            {["Cash Counter-1", "Cash Counter-2", "Cash Counter-3"].map(
              (value, index) => (
                <option key={index}>{value}</option>
              )
            )}
          </Select>
          <Select Width="200px">
            {[" Cash Book ", "Ledger With Cash", " Cash History"].map(
              (value, index) => (
                <option key={index}>{value}</option>
              )
            )}
          </Select>
        </ContainerPosition>

        <Button>Search</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
      <CashBookWindowTable />
    </>
  );
};

export default CashBook;
