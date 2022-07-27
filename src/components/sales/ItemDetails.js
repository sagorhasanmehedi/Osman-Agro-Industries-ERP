import React from "react";
import { Table } from "react-bootstrap";

const ItemDetails = () => {
  return (
    <>
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
            <th>Product Nmae</th>
            <th>Quty</th>
            <th>Unite</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
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
    </>
  );
};

export default ItemDetails;
