import React from "react";
import { Table } from "react-bootstrap";

const InvoiceAcountInfoTable = () => {
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
          <th>S.I</th>
          <th>Account & Check No</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {Array.from({ length: 4 }).map((_, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>Account & Check No</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InvoiceAcountInfoTable;
