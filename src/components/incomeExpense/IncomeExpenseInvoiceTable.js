import React from "react";
import Table from "react-bootstrap/esm/Table";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const IncomeExpenseInvoiceTable = () => {
  return (
    <>
      <HeaderName>Item Details</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{
          background: "white",
        }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>SL.</th>
            <th>Notes</th>
            <th>Quantity</th>
            <th>Unite</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Notes</td>
              <td>Quantity</td>
              <td>Unite</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default IncomeExpenseInvoiceTable;
