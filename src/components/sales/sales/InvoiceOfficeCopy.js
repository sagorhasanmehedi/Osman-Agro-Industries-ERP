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
  InvoiceBody,
  PlainText,
  TextAriea,
} from "../../../Pages/landingPage/LandingPageStyled";
import InvoiceSign from "../challan/InvoiceSign";

const InvoiceOfficeCopy = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />
      <InvoiceBody>
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

export default InvoiceOfficeCopy;
