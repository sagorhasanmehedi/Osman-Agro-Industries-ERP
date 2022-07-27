import React from "react";
import { Table } from "react-bootstrap";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";
import CustomerDetails from "./CustomerDetails";
import SaleSummary from "./SaleSummary";

const InvoiceOfficeCopy = () => {
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
          <tr>
            <th>Product Order By : </th>
            <th>Estimate Data :</th>
            <th>Estimate No :</th>
          </tr>
        </tbody>
      </Table>
      <HeaderName>Item Details</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <tr>
            <th>S.I</th>
            <th>Product Nmae</th>
            <th>Quty</th>
            <th>Unite</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>Product Nmae</td>
              <td>Quty</td>
              <td>Unite</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <HeaderName>Sale Summary</HeaderName>
      <SaleSummary />
    </>
  );
};

export default InvoiceOfficeCopy;
