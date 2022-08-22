import React from "react";
import { NavLink } from "react-router-dom";
import GatewaysForm from "../../../components/message/gateways/GatewaysForm";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../../sale/SaleStyled";

const GatewayWindow = () => {
  
  return (
    <>
      <PlainText2>Getaway Window</PlainText2>
      <ButtonGroupContainer Possition="end" Shadow="none" Background="none">
        <ContainerPosition Gap="10px">
        <NavLink to="/message/addgateway">
        <Button >Add New</Button>
        </NavLink>
         
          <Input type="search" placeholder="Account/sms Search" Width="250px" />
        </ContainerPosition>
      </ButtonGroupContainer>

      <GatewaysForm />
    </>
  );
};

export default GatewayWindow;
