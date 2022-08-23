import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SaleSummary from "../../components/sales/SaleSummary";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  Lavel,
  Select,
  TextAriea,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import AddItems from "../../components/sales/sales/AddItems";
import SelectCustomer from "../../components/sales/sales/SelectCustomer";
import CustomerDetailsForm from "../../components/sales/sales/CustomerDetailsForm";
import PaymentMethod from "../../components/sales/sales/PaymentMethod";

const NewPurchase = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/purchase/purchaseInvoice");
  };

  return (
    <>
      <PlainText2>New Purchase</PlainText2>
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
      </CardContainer>
      <CardContainer>
        <HeaderName>Receipt Details</HeaderName>
        <ReceiptDetails />
        <ContainerPosition Possition="end">
          <Button onClick={() => handleSubmit()}>Save</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default NewPurchase;

function ReceiptDetails() {
  return (
    <>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Status</Lavel>
          <Select>
            <option>Select Payment Method</option>
            <option>Status 1</option>
            <option>Status 1</option>
            <option>Status 1</option>
          </Select>
        </Col>
        <Col>
          <Lavel>GoDown</Lavel>
          <Select>
            <option>Select Payment Method</option>
            <option>GoDown 1</option>
            <option>GoDown 1</option>
            <option>GoDown 1</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Weight Scale or vehicles Id</Lavel>
          <Input />
        </Col>
      </Row>
    </>
  );
}
