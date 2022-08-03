import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductItems from "../ProductItems";
import CustomerDetails from "../sales/CustomerDetails";
import ProductOrderBy from "../sales/ProductOrderBy";
import SaleInvoiceInfo from "../sales/SaleInvoiceInfo";
import SaleSummary from "../SaleSummary";

const PurchaseOfficeInvoice = () => {
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

export default PurchaseOfficeInvoice;
