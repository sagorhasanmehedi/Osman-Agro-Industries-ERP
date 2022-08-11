import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import ProductItems from "../ProductItems";
import SaleSummary from "../SaleSummary";
import SaleInvoiceInfo from "./SaleInvoiceInfo";
import ProductOrderBy from "./ProductOrderBy";
import InvoiceHeader from "../../../assets/InvoiceHeader.png";
import InvoiceFooter from "../../../assets/InvoiceFooter.png";
import {
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  PlainText,
  TextAriea,
} from "../../../Pages/landingPage/LandingPageStyled";

const InvoiceOfficeCopy = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />

      <div style={{ padding: "10px 20px", minHeight: "81vh" }}>
        <ButtonGroupContainer Possition="space-between" Shadow="none">
          <PlainText Padding="10px 40px" Border="1px solid black">
            Invoice
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            BarCode
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            Office Copy
          </PlainText>
        </ButtonGroupContainer>
        <ContainerPosition Possition="space-between">
          <CustomerDetails />
          <SaleInvoiceInfo />
        </ContainerPosition>
        <ProductOrderBy />
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
      </div>

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

export default InvoiceOfficeCopy;
