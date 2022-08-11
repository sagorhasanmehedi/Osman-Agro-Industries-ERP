import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Lavel,
  Select,
  Input,
} from "../../../Pages/landingPage/LandingPageStyled";

const PaymentMethod = () => {
  return (
    <Row xs={1}>
      <Col>
        <Select>
          <option>Select Payment Method</option>
          <option>Cash Counter</option>
          <option>Bank Ac</option>
          <option>Mobile Banking</option>
        </Select>
        <Lavel>Upload Your Document</Lavel>
        <Input type="file" placeholder="Upload your file" />
      </Col>
    </Row>
  );
};

export default PaymentMethod;
