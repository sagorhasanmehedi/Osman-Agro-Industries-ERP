import React from "react";
import {
  ContainerPosition,
  HeaderName,
  TextAriea,
} from "../../Pages/landingPage/LandingPageStyled";
import InvoiceBarcode from "../invoice/InvoiceBarcode";
import InvoiceFormat from "../invoice/InvoiceFormat";
import IncomeExpenseInvoiceTable from "./IncomeExpenseInvoiceTable";
import { Col, Row } from "react-bootstrap";
import SaleSummary from "../sales/SaleSummary";
import InvoiceSign from "../sales/challan/InvoiceSign";
import CustomerDetails from "../sales/sales/CustomerDetails";
import SaleInvoiceInfo from "../sales/sales/SaleInvoiceInfo";

const ExpenceInvouceCustomerCopy = () => {
  return (
    <InvoiceFormat>
      <InvoiceBarcode invoiceName="Expense Invoice" copyName="Customer Copy" />

      <ContainerPosition Possition="space-between">
        <CustomerDetails />
        <SaleInvoiceInfo />
      </ContainerPosition>

      <IncomeExpenseInvoiceTable />

      <HeaderName>Sale Summary</HeaderName>
      <Row>
        <Col>
          <TextAriea rows="5" placeholder="Sale Details" />
        </Col>
        <Col>
          <SaleSummary />
        </Col>
      </Row>
      <InvoiceSign />
    </InvoiceFormat>
  );
};

export default ExpenceInvouceCustomerCopy;
