import React from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ManageChallanList = () => {
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
        <tr className="tableHeader">
          <th>SL.</th>
          <th>Challan No</th>
          <th>Delivery Date</th>
          <th>Delivery No</th>
          <th>Sale Date</th>
          <th>Sale No</th>
          <th>Customer Name</th>
          <th>item Name</th>
          <th>Quty</th>
          <th>Creator</th>
          <th>Vehicles</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Challan No</td>
            <td>Delivery Date</td>
            <td>Delivery No</td>
            <td>Sale Date</td>
            <td>Sale No</td>
            <td>Customer Name</td>
            <td>item Name</td>
            <td>Quty</td>
            <td>Creator</td>
            <td>Vehicles</td>
            <td>Amount</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    background: "#54D487",
                    border: "none",
                  }}
                >
                  View
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Add Delivery</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ManageChallanList;
