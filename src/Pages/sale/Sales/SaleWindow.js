import React from "react";
import SaleWindowTable from "../../../components/sales/SaleWindowTable";
import {
  ButtonGroupContainer,
  Button,
  Input,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import { NavLink } from "react-router-dom";

const SaleWindow = () => {
  return (
    <div>
      <PlainText2>Sale Window</PlainText2>
      <ButtonGroupContainer Gap="6px">
        <NavLink to="/dashboard/newSale">
          <Button>New Sale</Button>
        </NavLink>
        <NavLink to="#">
          <Button>Pos Sale</Button>
        </NavLink>

        <div
          style={{
            margin: "0px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Input
            type="search"
            placeholder="Invoice Search"
            style={{ width: "200px" }}
          />
          <Input
            type="date"
            placeholder="Invoice Search"
            style={{ width: "150px" }}
          />
          <Input
            type="date"
            placeholder="Invoice Search"
            style={{ width: "150px" }}
          />
          <Button>Search</Button>
        </div>

        <Button style={{ marginLeft: "auto" }}>Export</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
      <SaleWindowTable />
    </div>
  );
};

export default SaleWindow;
