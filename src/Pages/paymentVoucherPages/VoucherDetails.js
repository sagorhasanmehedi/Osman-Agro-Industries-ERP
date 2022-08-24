import React from "react";
import { Col, Row } from "react-bootstrap";
import AddItems from "../../components/sales/sales/AddItems";
import PaymentMethod from "../../components/sales/sales/PaymentMethod";
import SelectCustomer from "../../components/sales/sales/SelectCustomer";
import SaleSummary from "../../components/sales/SaleSummary";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  Lavel,
  TextAriea,
} from "../landingPage/LandingPageStyled";

const VoucherDetails = ({ handleSubmit }) => {
  return (
    <>
      <SelectCustomer />
      <CustomerDetailsForm />
      <CardContainer>
        <HeaderName>Items Summary</HeaderName>
        <AddItems />
      </CardContainer>

      <CardContainer>
        <HeaderName>Sales Summary</HeaderName>
        <Row xs={1} md={2}>
          <Col>
            <TextAriea rows={4} placeholder="Details..." />
            <PaymentMethod />
          </Col>
          <Col>
            <SaleSummary />
          </Col>
        </Row>

        <ContainerPosition Possition="end">
          <Button onClick={() => handleSubmit()}>Save</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default VoucherDetails;

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
            <Lavel>Branch Name</Lavel>
            <Input type="Text" name="Email" />
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
            <Lavel>Bank Name</Lavel>
            <Input type="text" name="Email" />
          </CardContainer>
        </Col>
      </Row>
    </>
  );
};
