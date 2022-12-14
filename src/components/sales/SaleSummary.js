import React from "react";
import Table from "react-bootstrap/Table";

const SaleSummary = () => {
  return (
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
          <th>Total Sale Amount</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Tax Amount</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Service Charge</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Shipping Cost</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Grand Total</th>
          <th>20000</th>
        </tr>
        <tr>
          <th>Paid Amount</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Pervious Balance</th>
          <th>200000</th>
        </tr>
        <tr>
          <th>Current Balance</th>
          <th>200000</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default SaleSummary;
