import React from "react";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";
import { PlainText2 } from "../../Pages/sale/SaleStyled";
import { Col, Row } from "react-bootstrap";

const AddProductName = ({ name, setName, handleSubmit, }) => {
  return (
    <CardContainer>
      <HeaderName>Add {name}</HeaderName>
      <Row xs={1} sx={2} md={3}>
        <Col>
          <Input
            name={`${name}Name`}
            placeholder="Enter your brand name"
            onChange={(e) => setName({})}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default AddProductName;
