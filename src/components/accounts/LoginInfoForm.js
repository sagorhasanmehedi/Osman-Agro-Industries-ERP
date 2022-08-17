import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
  Lavel,
} from "../../Pages/landingPage/LandingPageStyled";

const LoginInfoForm = () => {
  return (
    <CardContainer>
      <Row>
        <Col>
          <Lavel>Enter Email or Phone Number</Lavel>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="email" placeholder="User Email" />
        </Col>
        <Col>
          <Input type="tel" placeholder="User Phone" />
        </Col>
        <Col>
          <Input type="password" placeholder="User Password" />
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

export default LoginInfoForm;
