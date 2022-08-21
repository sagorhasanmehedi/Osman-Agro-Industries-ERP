import React from "react";
import InventoryLedgerTable from "../../components/report/InventoryLedgerTable";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const InventoryLedger = () => {
  return (
    <>
      <PlainText2>Inventory Ledger Window</PlainText2>
      <ButtonGroupContainer Gap="20px">
        <Button>Start Date</Button>
        <Button>End Date</Button>
        <ContainerPosition Margin="0px auto" Possition="center" Gap="10px">
          <Select Width="200px">
            {["Warehouse", "Delivery", "Receipt"].map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </Select>
          <Select Width="200px">
            {["Type", "Delivery", "Receipt"].map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </Select>
        </ContainerPosition>
        <Input type="search" placeholder="Search" style={{ width: "300px" }} />
        <Button>Search</Button>
      </ButtonGroupContainer>
      <InventoryLedgerTable />
    </>
  );
};

export default InventoryLedger;
