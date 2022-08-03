import React from "react";
import { Table } from "react-bootstrap";

const SaleReportTable = () => {
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
          <th>SL.</th>
          <th>Invoice No</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Vehicle No</th>
          <th>Net Bill</th>
          <th>Paid Bill</th>
          <th>Due Bill</th>
          <th>Service Bill</th>
          <th>Service Fee</th>
          <th>Creator</th>
        </tr>
        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Invoice No</td>
            <td>Customer</td>
            <td>Status</td>
            <td>Vehicle No</td>
            <td>Net Bill</td>
            <td>Paid Bill</td>
            <td>Due Bill</td>
            <td>Service Bill</td>
            <td>Service Fee</td>
            <td>Creator</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SaleReportTable;
