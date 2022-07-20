import React from "react";
import Table from "react-bootstrap/Table";

const SaleWindowTable = () => {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white" }}
    >
      <thead>
        <tr style={{ borderWidth: 0 }}>
          <th>Si</th>
          <th>Invoice</th>
          <th>Status</th>
          <th>Vehicle No</th>
          <th>Net Bill</th>
          <th>Pail Bill</th>
          <th>Due Bill </th>
          <th>Rent Office Fee </th>
          <th>Creator</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 12 }).map((_, idx) => (
          <tr>
            <td>Si</td>
            <td>Invoice</td>
            <td>Status</td>
            <td>Vehicle No</td>
            <td>Net Bill</td>
            <td>Pail Bill</td>
            <td>Due Bill </td>
            <td>Rent Office Fee </td>
            <td>Creator</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SaleWindowTable;
