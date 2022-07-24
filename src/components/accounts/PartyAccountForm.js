import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
  Lavel,
} from "../../Pages/landingPage/LandingPageStyled";

const PartyAccountForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="text" placeholder="Name" />
        </Col>
        <Col>
          <Input type="text" placeholder="Address" />
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
          <Input type="date" placeholder="Upload your file" />
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
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Upload Your Profile</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
        <Col>
          <Lavel>Upload Your NID</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
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

export default PartyAccountForm;
