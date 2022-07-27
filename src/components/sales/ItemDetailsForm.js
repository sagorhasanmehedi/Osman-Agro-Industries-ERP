import React from "react";
import {
  Button,
  HeaderName,
  Input,
  Lavel,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";
import { PlainText2 } from "../../Pages/sale/SaleStyled";
import SaleSummary from "./SaleSummary";

const ItemDetailsForm = () => {
  return (
    <>
      <Row>
        <Col>
          <Select>
            <option>Item search and select</option>
            <option>Item search and select</option>
          </Select>
        </Col>
        <Col>
          <Input type="text" placeholder="Av.Qnty" />
        </Col>
        <Col>
          <Input type="number" placeholder="Bag" />
        </Col>
        <Col>
          <Input type="number" placeholder="Qnty" />
        </Col>
        <Col>
          <Input type="number" placeholder="Unite" />
        </Col>
        <Col>
          <Input type="number" placeholder="Rate" />
        </Col>
      </Row>
      <Row>
        <Col xs={11}>
          <Input type="number" placeholder="Note:" />
        </Col>
        <Col style={{ alignSelf: "center" }}>
          <Button>Add</Button>
        </Col>
      </Row>
      <HeaderName>Sales Summary</HeaderName>
      <SaleSummary />
      <Row>
        <Col style={{ paddingTop: "30px" }}>
          <img
            src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
            alt="image Preview"
            style={{ width: "100%", height: "300px" }}
          />
        </Col>
        <Col style={{ paddingTop: "30px" }}>
          <Select>
            <option>Select Payment Method</option>
            <option>Cash Counter</option>
            <option>Bank Ac</option>
            <option>Mobile Banking</option>
          </Select>
          <Lavel>Upload Your Profile</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
      </Row>
    </>
  );
};

export default ItemDetailsForm;
