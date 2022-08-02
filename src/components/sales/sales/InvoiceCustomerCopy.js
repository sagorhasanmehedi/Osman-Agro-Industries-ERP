import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductItems from "../ProductItems";
import SaleSummary from "../SaleSummary";
import CustomerDetails from "./CustomerDetails";
import SaleInvoiceInfo from "./SaleInvoiceInfo";

const InvoiceCustomerCopy = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <CustomerDetails />
        </Col>
        <Col xs={12} sm={6}>
          <SaleInvoiceInfo />
        </Col>
      </Row>
      <ProductItems />
      <SaleSummary />
    </>
  );
};

export default InvoiceCustomerCopy;
