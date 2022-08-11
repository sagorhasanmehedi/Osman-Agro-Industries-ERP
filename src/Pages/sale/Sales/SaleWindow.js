import React from "react";
import SaleWindowTable from "../../../components/sales/SaleWindowTable";
import {
  ButtonGroupContainer,
  Button,
  Input,
  ContainerPosition,
  Lavel,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import { NavLink } from "react-router-dom";

const SaleWindow = () => {
  return (
    <>
      <PlainText2>Sale Window</PlainText2>
      <ButtonGroupContainer Gap="6px" Padding="0px 5px">
        <NavLink to="/dashboard/newSale">
          <Button>New Sale</Button>
        </NavLink>
        <NavLink to="#">
          <Button>Pos Sale</Button>
        </NavLink>

        <ContainerPosition Margin="0px auto" Possition="center" Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Lavel>End Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Input type="search" placeholder="Invoice Search" Width="250px" />
          <Button>Search</Button>
        </ContainerPosition>

        <Button style={{ marginLeft: "auto" }}>Export</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>

      <SaleWindowTable />
    </>
  );
};

export default SaleWindow;
