import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
  Lavel,
} from "../../Pages/landingPage/LandingPageStyled";

const EmployeeAccountForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Account Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Address" />
        </Col>
        <Col>
          <Input type="number" placeholder="Machine Code" />
        </Col>

        <Col>
          <Input type="tel" placeholder="Mobile No" />
        </Col>
        <Col>
          <Input type="email" placeholder="Email Address" />
        </Col>
        <Col>
          <Input type="text" placeholder="District Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="City Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Thana Name" />
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
          <Input type="text" placeholder="Respensible" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Categori" />
        </Col>
        <Col>
          <Input type="text" placeholder="Account Area" />
        </Col>
        <Col>
          <Input type="text" placeholder="Division" />
        </Col>
        <Col>
          <Input type="text" placeholder="Designation" />
        </Col>
        <Col>
          <Input type="text" placeholder="Duty Type" />
        </Col>
        <Col>
          <Input type="text" placeholder="Branch Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Employee Status" />
        </Col>

        <Col>
          <Input type="text" placeholder="Account Status" />
        </Col>
        <Col>
          <Input type="number" placeholder="Opening Balance" />
        </Col>
        <Col>
          <Input type="number" placeholder="Balance hold" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Lavel>Joining Date</Lavel>
          <Input type="date" />
        </Col>
        <Col>
          <Lavel>Start a new Session</Lavel>
          <Input type="date" />
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

export default EmployeeAccountForm;
