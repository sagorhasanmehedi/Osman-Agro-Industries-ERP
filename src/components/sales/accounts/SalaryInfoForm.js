import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
} from "../../../Pages/landingPage/LandingPageStyled";

const SalaryInfoForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Rate Type" />
        </Col>
        <Col>
          <Input type="text" placeholder="Rate Match Account" />
        </Col>
        <Col>
          <Input type="text" placeholder="Rate" />
        </Col>
        <Col>
          <Input type="text" placeholder="Daily Rate" />
        </Col>
        <Col>
          <Input type="text" placeholder="Late Deduction" />
        </Col>
        <Col>
          <Input type="text" placeholder="Absent Deduction" />
        </Col>
        <Col>
          <Input type="text" placeholder="Fixed tax Deduction" />
        </Col>
        <Col>
          <Input type="text" placeholder="Tax (%) Deduction" />
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

export default SalaryInfoForm;
