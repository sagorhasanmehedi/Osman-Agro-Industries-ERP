import React from "react";
import { Table } from "react-bootstrap";

const VehicleRentDetails = () => {
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
          <th>Receiver Name</th>
          <th colSpan={2}></th>
        </tr>

        <tr>
          <th>Rent Office Fee</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Vehicle Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Advanced Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Due Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
      </tbody>
    </Table>
  );
};

export default VehicleRentDetails;
