import React from "react";
import {
  CardContainer,
  Input,
  Lavel,
} from "../../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";

const CustomerDetailsForm = () => {
  return (
    <>
      <Row xs={1} sm={2} style={{ maxWidth: "1091px" }}>
        <Col>
          <CardContainer>
            <Lavel>Name</Lavel>
            <Input type="text" name="Name" />
            <Lavel>Address</Lavel>
            <Input type="text" name="Address" />
            <Lavel>Phone1</Lavel>
            <Input type="tel" name="Phone1" />
            <Lavel>Phone2</Lavel>
            <Input type="tel" name="Phone2" />
            <Lavel>Email</Lavel>
            <Input type="email" name="Email" />
          </CardContainer>
        </Col>
        <Col>
          <CardContainer>
            <img
              src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
              alt="image"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <br />
            <Lavel>Previous Balance</Lavel>
            <Input type="number" name="Privious Balance" />
            <Lavel>Balance Hold</Lavel>
            <Input type="number" name="Blance Hold" />
            <Lavel>Today Transaction No</Lavel>
            <Input type="text" name="Today Transaction No" />
            <Lavel>Billing No</Lavel>
            <Input type="text" name="Billing No" />
          </CardContainer>
        </Col>
      </Row>
      <CardContainer style={{ maxWidth: "1072px" }}>
        <Row>
          <Col xs={7}>
            <Lavel>Product Order</Lavel>
            <Input
              type="text"
              name="Product Order By: Websati/Mr.Bablu-Area: Mirpur, Dhaka. "
            />
          </Col>
          <Col xs={2}>
            <Lavel>Estimate Date</Lavel>
            <Input type="text" name="Estimate Date:" />
          </Col>
          <Col xs={3}>
            <Lavel>Estimate No</Lavel>
            <Input type="text" name="Estimate No" />
          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

export default CustomerDetailsForm;
