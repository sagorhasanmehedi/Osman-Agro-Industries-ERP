import React from "react";
import { Table } from "react-bootstrap";

const ProductItems = () => {
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
          <th>S.I</th>
          <th>Product Nmae</th>
          <th>Quty</th>
          <th>Unite</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
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
  );
};

export default ProductItems;
