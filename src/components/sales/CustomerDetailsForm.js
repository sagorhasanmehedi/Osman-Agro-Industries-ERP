import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  Button,
  CardContainer,
  Input,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";

const CustomerDetailsForm = () => {
  return (
    <CardContainer>
      <Row>
        <Col xs={9}>
          <Row>
            <Col xs={8}>
              <Select>
                <option>Search Customer and Select</option>
                <option>Search Customer and Select</option>
                <option>Search Customer and Select</option>
              </Select>
            </Col>
            <Col xs={4} style={{ alignSelf: "center" }}>
              <Button>Cash Sale</Button>
            </Col>
          </Row>
          <Row xs={1} sm={2}>
            <Col>
              <Input type="text" placeholder="Name" />
            </Col>
            <Col>
              <Input type="text" placeholder="Address" />
            </Col>
            <Col>
              <Input type="tel" placeholder="Phone1" />
            </Col>
            <Col>
              <Input type="tel" placeholder="Phone2" />
            </Col>
            <Col>
              <Input type="email" placeholder="Email" />
            </Col>
            <Col>
              <Input type="number" placeholder="Privious Balance" />
            </Col>
            <Col>
              <Input type="number" placeholder="Blance Hold" />
            </Col>
            <Col>
              <Input type="text" placeholder="Today Transaction No" />
            </Col>
            <Col>
              <Input type="text" placeholder="Invoice No" />
            </Col>
            <Col>
              <Input type="text" placeholder="Billing No" />
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <img
            src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Input
            type="text"
            placeholder="Product Order By: Websati/Mr.Bablu-Area: Mirpur, Dhaka. "
          />
        </Col>
        <Col xs={2}>
          <Input type="text" placeholder="Estimate Date:" />
        </Col>
        <Col xs={3}>
          <Input type="text" placeholder="Estimate No" />
        </Col>
      </Row>
    </CardContainer>
  );
};

export default CustomerDetailsForm;
