import React from "react";
import { Table } from "react-bootstrap";

const SaleInvoiceInfo = () => {
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
          <th>Invoice No :</th>
        </tr>
        <tr>
          <th>Billing Date :</th>
        </tr>
        <tr>
          <th>Billing No :</th>
        </tr>
        <tr>
          <th>Created By :</th>
        </tr>
        <tr>
          <th>Status :</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default SaleInvoiceInfo;
