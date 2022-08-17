import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const BankAccountForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Account Name" />
        </Col>
        <Col>
          <Input type="number" placeholder="Account No" />
        </Col>
        <Col>
          <Input type="email" placeholder="Email" />
        </Col>
        <Col>
          <Input type="text" placeholder="City" />
        </Col>
        <Col>
          <Input type="text" placeholder="District" />
        </Col>
        <Col>
          <Input type="text" placeholder="Thana" />
        </Col>
        <Col>
          <Input type="text" placeholder="Union Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Word No" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Type" />
        </Col>
        <Col>
          <Input type="text" placeholder="Responsible" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Category" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Area" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Status" />
        </Col>
        <Col>
          <Input type="text" placeholder="Opening Balance" />
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
          <Button> Save </Button>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default BankAccountForm;
