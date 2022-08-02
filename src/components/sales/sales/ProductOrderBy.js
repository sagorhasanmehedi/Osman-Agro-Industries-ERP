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
      style={{ background: "white" }}
    >
      <tbody>
        <tr>
          <th>Product Order By : </th>
          <th>Estimate Data :</th>
          <th>Estimate No :</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductOrderBy;
