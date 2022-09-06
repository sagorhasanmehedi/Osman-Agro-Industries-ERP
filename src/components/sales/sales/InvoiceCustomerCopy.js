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
import InvoiceFormat from "../../invoice/InvoiceFormat";
import InvoiceBarcode from "../../../components/invoice/InvoiceBarcode";

const InvoiceCustomerCopy = () => {
  return (
    <InvoiceFormat>
       <InvoiceBarcode invoiceName="Invoice" copyName="Customer Copy" />
      <InvoiceBody>
       
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
    </InvoiceFormat>
  );
};

export default InvoiceCustomerCopy;
