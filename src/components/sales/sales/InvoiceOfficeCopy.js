import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import ProductItems from "../ProductItems";
import SaleSummary from "../SaleSummary";
import SaleInvoiceInfo from "./SaleInvoiceInfo";
import ProductOrderBy from "./ProductOrderBy";
import InvoiceBarcode from "../../../components/invoice/InvoiceBarcode";
import {
  ContainerPosition,
  HeaderName,
  InvoiceBody,
  TextAriea,
} from "../../../Pages/landingPage/LandingPageStyled";
import InvoiceSign from "../challan/InvoiceSign";
import InvoiceFormat from "../../invoice/InvoiceFormat";

const InvoiceOfficeCopy = () => {
  return (
    <InvoiceFormat>
      <InvoiceBarcode invoiceName="Invoice" copyName="Office Copy" />
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
    </InvoiceFormat>
  );
};

export default InvoiceOfficeCopy;
