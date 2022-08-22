import React from "react";
import SendingForm from "../../components/message/SendingForm";

import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const Sending = () => {
  return (
    <>
      <PlainText2>Massage Sending Window</PlainText2>
      <ButtonGroupContainer Possition="space-between" Shadow="none" Background="none">
        <ContainerPosition Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Button>Search</Button>
        </ContainerPosition>
        <ContainerPosition Gap="10px">
        <Button>Add New</Button>
          <Input type="search" placeholder="Account/sms Search" Width="250px" />
        </ContainerPosition>
      </ButtonGroupContainer>
      <SendingForm/>
    </>
  );
};

export default Sending;
