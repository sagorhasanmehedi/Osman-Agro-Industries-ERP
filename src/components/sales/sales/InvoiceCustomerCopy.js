import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  InvoiceBody,
  PlainText,
  TextAriea,
} from "../../../Pages/landingPage/LandingPageStyled";
import ProductItems from "../ProductItems";
import SaleSummary from "../SaleSummary";
import CustomerDetails from "./CustomerDetails";
import SaleInvoiceInfo from "./SaleInvoiceInfo";
import InvoiceHeader from "../../../assets/InvoiceHeader.png";
import InvoiceFooter from "../../../assets/InvoiceFooter.png";
import InvoiceSign from "../challan/InvoiceSign";

const InvoiceCustomerCopy = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />

      <InvoiceBody>
        <ButtonGroupContainer Possition="space-between" Shadow="none">
          <PlainText Padding="10px 40px" Border="1px solid black">
            Invoice
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            BarCode
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            Customer Copy
          </PlainText>
        </ButtonGroupContainer>
        <ContainerPosition Possition="space-between">
          <CustomerDetails />
          <SaleInvoiceInfo />
        </ContainerPosition>

        <ProductItems />
        <HeaderName>Sale Summary</HeaderName>
        <Row>
          <Col>
            <TextAriea rows="5" placeholder="Sale Details" />
            <TextAriea rows="4" placeholder="Last Created Details" />
          </Col>
          <Col>
            <SaleSummary />
          </Col>
        </Row>
      </InvoiceBody>

      <InvoiceSign />
      <img
        src={InvoiceFooter}
        alt=""
        style={{
          width: "100%",
        }}
      />
    </CardContainer>
  );
};

export default InvoiceCustomerCopy;
