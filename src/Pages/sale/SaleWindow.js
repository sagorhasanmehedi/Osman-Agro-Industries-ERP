import React from "react";
import SaleWindowTable from "../../components/sales/SaleWindowTable";
import {
  ButtonGroupContainer,
  Button,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "./SaleStyled";
import { NavLink } from "react-router-dom";

const SaleWindow = () => {
  return (
    <div>
      <PlainText2>Sale Window</PlainText2>
      <ButtonGroupContainer Padding="17px" BorderRadius="8px" Gap="6px">
        <NavLink to="/dashboard/newSale">
          <Button>New Sale</Button>
        </NavLink>
        <NavLink to="#" style={{ marginRight: "300px" }}>
          <Button>Pos Sale</Button>
        </NavLink>

        <div style={{ width: "300px" }}>
          <Input type="search" placeholder="Invoice Search" />
        </div>
        <div
          style={{
            width: "300px",
            margin: "0px 10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Input type="date" placeholder="Invoice Search" />
          <Input type="date" placeholder="Invoice Search" />
        </div>
        <Button>Search</Button>
        <Button style={{ marginLeft: "auto" }}>Export</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
      <SaleWindowTable />
    </div>
  );
};

export default SaleWindow;
