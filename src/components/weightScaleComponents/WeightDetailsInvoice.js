import React from "react";
import { Table } from "react-bootstrap";

const WeightDetailsInvoice = () => {
  return (
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
          <th>First Weight</th>
          <th>Second Weight</th>
          <th>Net Weight</th>
        </tr>
        <tr>
          <td>First Weight</td>
          <td>Second Weight</td>
          <td>Net Weight</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WeightDetailsInvoice;
