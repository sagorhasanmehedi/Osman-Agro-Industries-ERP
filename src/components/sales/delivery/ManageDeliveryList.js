import React from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ManageDeliveryList = () => {
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
          <th>Sale Date</th>
          <th>Sale Invoice No</th>
          <th>Customer Name</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Note</th>
          <th>Creator</th>
          <th>Action</th>
        </tr>
        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Sale Date</td>
            <td>Sale Invoice No</td>
            <td>Customer Name</td>
            <td>Item</td>
            <td>Quantity</td>
            <td>Amount</td>
            <td>Note</td>
            <td>Creator</td>
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

export default ManageDeliveryList;
