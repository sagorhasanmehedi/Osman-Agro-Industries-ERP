import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const IncomeExpenseForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Account Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Type" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Category" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Status" />
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

export default IncomeExpenseForm;
