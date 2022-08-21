import React from "react";
import ManagePendingDeliveryWindowForm from "../../../components/sales/ManagePendingDelivery/ManagePendingDeliveryWindowForm";

import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";

const ManagePendingDeliveryWindow = () => {
  return (
    <>
      <PlainText2>Manage Pending Delivery Window</PlainText2>
      <ButtonGroupContainer Possition="space-between">
        <ContainerPosition Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Lavel>End Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
        </ContainerPosition>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Invoice Search" Width="250px" />
          <Button>Search</Button>
        </ContainerPosition>
      </ButtonGroupContainer>

      <ManagePendingDeliveryWindowForm />
    </>
  );
};

export default ManagePendingDeliveryWindow;
