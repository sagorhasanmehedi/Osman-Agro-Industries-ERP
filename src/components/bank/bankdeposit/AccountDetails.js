import React from "react";
import {
  CardContainer,
  Input,
  Lavel,
} from "../../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";

const AccountDetails = () => {
  return (
    <>
      <CardContainer Width="45%">
        <img
          src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
          alt=""
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
          }}
        />
        <br />
        <Lavel>A/c Id:</Lavel>
        <Input type="number" name="Privious Balance" />
        <Lavel>A/c Name:</Lavel>
        <Input type="number" name="Blance Hold" />
        <Lavel>A/c No:</Lavel>
        <Input type="text" name="Today Transaction No" />
        <Lavel>Bank Name:</Lavel>
        <Input type="text" name="Billing No" />
        <Lavel>Branch Name:</Lavel>
        <Input type="text" name="Billing No" />
      </CardContainer>
    </>
  );
};

export default AccountDetails;
