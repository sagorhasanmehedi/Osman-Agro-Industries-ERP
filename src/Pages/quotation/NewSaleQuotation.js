import React from "react";
import { Col, Row } from "react-bootstrap";
import AddItems from "../../components/sales/sales/AddItems";
import CustomerDetailsForm from "../../components/sales/sales/CustomerDetailsForm";
import PaymentMethod from "../../components/sales/sales/PaymentMethod";
import SelectCustomer from "../../components/sales/sales/SelectCustomer";
import SaleSummary from "../../components/sales/SaleSummary";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  TextAriea,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const NewSaleQuotation = () => {
  return (
    <>
      <PlainText2>New Sale Quotation</PlainText2>

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
          <Button>Save</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default NewSaleQuotation;
