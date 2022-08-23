import React from "react";
import { PlainText2 } from "../../Pages/sale/SaleStyled";

import { Row, Col } from "react-bootstrap";
import {
  Button,
  ButtonGroup,
  ButtonGroupContainer,
  CardContainer,
  Input,
  Lavel,
} from "../../Pages/landingPage/LandingPageStyled";

const AddAccountForm = () => {
  return (
    <>
      <PlainText2>Add New Account</PlainText2>
      <CardContainer>
        <Row xs={1} sm={2} >
          <Col>
            <Lavel>Account Name :</Lavel>
            <Input type="text" name="Name" />
            <Lavel>Bank Name :</Lavel>
            <Input type="text" name="Address" />
            <Lavel>Email :</Lavel>
            <Input type="tel" name="Phone1" />
            <Lavel>District :</Lavel>
            <Input type="tel" name="Phone2" />
            <Lavel>Union Name :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Account Type :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Account Category :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Account Status :</Lavel>
            <Input type="email" name="Email" />
          </Col>
          <Col>
            <Lavel>Account No :</Lavel>
            <Input type="text" name="Name" />
            <Lavel>Branch Name :</Lavel>
            <Input type="text" name="Address" />
            <Lavel>City :</Lavel>
            <Input type="tel" name="Phone1" />
            <Lavel>Thana :</Lavel>
            <Input type="tel" name="Phone2" />
            <Lavel>Word No :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Responsible :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Account Area :</Lavel>
            <Input type="email" name="Email" />
            <Lavel>Opening Balance :</Lavel>
            <Input type="email" name="Email" />
          </Col>
        </Row>
        <ButtonGroupContainer
          Shadow="none"
          Background="none"
          Possition="end"
          Margin="15px 0"
        >
          <Button Padding=" 12px 25px">Submit</Button>
        </ButtonGroupContainer>
      </CardContainer>
    </>
  );
};

export default AddAccountForm;
