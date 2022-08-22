import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
} from "../../../Pages/landingPage/LandingPageStyled";

const AddGatewayForm = () => {
  return (
    <CardContainer Width="40%" style={{ margin: "auto" }}>
      <Lavel>Gateway Type :</Lavel>
      <Input type="text" name="Name" Margin=" 4px 0 8px 0" />
      <Lavel>Gateway Name :</Lavel>
      <Input type="text" name="Address" Margin="  4px 0 8px 0" />
      <Lavel>Gateway Code :</Lavel>
      <Input type="tel" name="Phone1" Margin="  4px 0 8px 0" />
      <Lavel>Com Port :</Lavel>
      <Input type="tel" name="Phone2" Margin="  4px 0 8px 0" />
      <Lavel>Username :</Lavel>
      <Input type="email" name="Email" Margin="  4px 0 8px 0" />
      <Lavel>Password :</Lavel>
      <Input type="email" name="Email" Margin="  4px 0 8px 0" />
      <Lavel>Server Port :</Lavel>
      <Input type="email" name="Email" Margin="  4px 0 8px 0" />
      <Lavel>Server Url :</Lavel>
      <Input type="email" name="Email" Margin="  4px 0 8px 0" />
      <ContainerPosition Possition="end">
      <Button Margin="10px 0 0 0 ">Save</Button>
      </ContainerPosition>
     
    </CardContainer>
  );
};

export default AddGatewayForm;
