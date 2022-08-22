import React from "react";
import InboxForm from "../../components/message/InboxForm";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const Inbox = () => {
  return (
    <>
      <PlainText2>Massage Inbox Window </PlainText2>
      <ButtonGroupContainer Possition="space-between">
        <ContainerPosition Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Button>Search</Button>
        </ContainerPosition>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Account/sms Search" Width="250px" />
        </ContainerPosition>
      </ButtonGroupContainer>
      <InboxForm />
    </>
  );
};

export default Inbox;
