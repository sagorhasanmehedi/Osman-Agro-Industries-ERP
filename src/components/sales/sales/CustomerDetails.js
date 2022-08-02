import React from "react";
import { Table } from "react-bootstrap";

const CustomerDetails = () => {
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
          <th>Ac/No : </th>
        </tr>
        <tr>
          <th>Name : </th>
        </tr>
        <tr>
          <th>Address : </th>
        </tr>
        <tr>
          <th>Mobile : </th>
        </tr>
        <tr>
          <th>Email : </th>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomerDetails;
