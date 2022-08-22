import React from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "./SaleStyled";
import ManageDeliveryList from "../../components/sales/delivery/ManageDeliveryList";

const ManageChallan = () => {
  return (
    <>
      <PlainText2>Manage Challan</PlainText2>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Lavel>Start Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />
        <Lavel>End Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />
        <Button style={{ marginRight: "auto" }}>Search</Button>
        <Input type="search" placeholder="Invoice Search" Width="250px" />
      </ButtonGroupContainer>
      <CardContainer>
        <ManageDeliveryList></ManageDeliveryList>
      </CardContainer>
    </>
  );
};

export default ManageChallan;
