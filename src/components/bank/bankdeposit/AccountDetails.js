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
      <Row xs={1} sm={2} style={{ maxWidth: "1091px" }}>
        <Col>
          <CardContainer>
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
        </Col>
        <Col>
          <CardContainer>
            <img
              src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
              alt="imae"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <br />
            <Lavel>Previous Balance</Lavel>
            <Input type="number" name="Privious Balance" />
            <Lavel>Balance Hold</Lavel>
            <Input type="number" name="Blance Hold" />
            <Lavel>Today Transaction No</Lavel>
            <Input type="text" name="Today Transaction No" />

            <Lavel>Account Status:</Lavel>
            <Input type="text" name="Email" />
          </CardContainer>
        </Col>
      </Row>
    </>
  );
};

export default AccountDetails;
