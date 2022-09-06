import React from "react";
import { Table } from "react-bootstrap";

const ProductOrderBy = () => {
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
          <th>Product Order By : </th>
          <th>Estimate Data :</th>
          <th>Estimate No :</th>
        </tr>
        {[1].map((valeu, index) => (
          <tr key={index}>
            <td>Product Order By : </td>
            <td>Estimate Data :</td>
            <td>Estimate No :</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductOrderBy;
