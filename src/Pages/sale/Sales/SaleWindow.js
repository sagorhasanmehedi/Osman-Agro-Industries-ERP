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
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <NavLink to="/sale/newSale">
          <Button>New Sale</Button>
        </NavLink>
        <NavLink to="#">
          <Button>Pos Sale</Button>
        </NavLink>

        <ContainerPosition
          Margin="0px auto"
          Possition="center"
          Gap="10px"
          style={{ margin: "auto" }}
        >
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Lavel>End Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Input type="search" placeholder="Invoice Search" Width="250px" />
          <Button>Search</Button>
        </ContainerPosition>

        <Button Background="#1B253F">Export</Button>
        <Button Background="#1B253F">Print</Button>
      </ButtonGroupContainer>

      <SaleWindowTable />
    </>
  );
};

export default SaleWindow;
