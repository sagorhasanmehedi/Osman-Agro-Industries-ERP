import React from "react";
import SaleWindowTable from "../../../components/sales/SaleWindowTable";
import {
  ButtonGroupContainer,
  Button,
  Input,
} from "../../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import { PlainText2 } from "../../sale/SaleStyled";

const ManagePurchase = () => {
  return (
    <div>
      <PlainText2>Purchase Window</PlainText2>
      <ButtonGroupContainer Gap="6px">
        <NavLink to="/purchase/newpurchase">
          <Button>New Purchase</Button>
        </NavLink>
        <NavLink to="#">
          <Button>Pos Purchase</Button>
        </NavLink>

        <Input
          type="date"
          placeholder="Invoice Search"
          style={{ width: "150px", marginLeft: "auto" }}
        />

        <Button>Export</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
      <SaleWindowTable />
    </div>
  );
};

export default ManagePurchase;
