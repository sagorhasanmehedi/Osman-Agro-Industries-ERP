import React from "react";
import { useNavigate } from "react-router-dom";
import SendingForm from "../../components/message/SendingForm";
import UpdateMessageForm from "../../components/message/UpdateMessageForm";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { NavLink } from "react-router-dom";

const UpdateMessage = () => {
   
  return (
    <>
      <PlainText2>Massage</PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
        <ContainerPosition Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Lavel>End Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Button>Search</Button>
        </ContainerPosition>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <NavLink to="/message/createmessage"> 
          <Button>Add New</Button>
          </NavLink>
          
        </ContainerPosition>
      </ButtonGroupContainer>
      <UpdateMessageForm />
    </>
  );
};

export default UpdateMessage;
