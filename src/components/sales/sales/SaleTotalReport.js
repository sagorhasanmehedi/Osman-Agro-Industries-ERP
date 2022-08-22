import React from "react";
import { Table } from "react-bootstrap";
const SaleTotalReport = () => {
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
        <tr className="tableHeader">
          <th>Cash Sale Amount</th>
          <th>Due Sale Amount</th>
          <th>Total Sale Amount</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>100000</td>
          <td>1200</td>
          <td>10234443</td>
          <td>pendding</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SaleTotalReport;
