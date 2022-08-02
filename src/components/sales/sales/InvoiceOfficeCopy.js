import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import ProductItems from "../ProductItems";
import SaleSummary from "../SaleSummary";
import SaleInvoiceInfo from "./SaleInvoiceInfo";
import ProductOrderBy from "./ProductOrderBy";

const InvoiceOfficeCopy = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <CustomerDetails />
        </Col>
        <Col xs={12} sm={6}>
          <SaleInvoiceInfo />
        </Col>
        <Col xs={12}>
          <ProductOrderBy />
        </Col>
      </Row>
      <ProductItems />
      <SaleSummary />
    </>
  );
};

export default InvoiceOfficeCopy;
