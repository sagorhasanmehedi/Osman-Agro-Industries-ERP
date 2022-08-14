import React from "react";
import { Table } from "react-bootstrap";

const InvoiceSign = () => {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{
        background: "white",
        marginBottom: "0px",
      }}
    >
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }}>Driver Signature </td>
          <td style={{ textAlign: "center" }}>Chaking Department</td>
          <td style={{ textAlign: "center" }}>Authorised Signature</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default InvoiceSign;
