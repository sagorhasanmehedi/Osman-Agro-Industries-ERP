import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
} from "../../../Pages/landingPage/LandingPageStyled";

const PartyBankAccountForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Account Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Number" />
        </Col>
        <Col>
          <Input type="text" placeholder="Bank Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Branch Name" />
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button Padding="10px 40px"> Save </Button>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default PartyBankAccountForm;
