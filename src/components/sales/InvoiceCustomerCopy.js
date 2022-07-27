import React from "react";
import SaleSummary from "./SaleSummary";
import { Table } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import ItemDetails from "./ItemDetails";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const InvoiceCustomerCopy = () => {
  return (
    <>
      <HeaderName>Customer Details</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <CustomerDetails />
        </tbody>
      </Table>
      <HeaderName>Item Details</HeaderName>
      <ItemDetails />
      <HeaderName>Sale Summary</HeaderName>
      <SaleSummary />
    </>
  );
};

export default InvoiceCustomerCopy;
