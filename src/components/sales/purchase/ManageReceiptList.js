import React from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ManageReceiptList = () => {
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
          <th>Warehouse Name</th>
          <th>Receipt Date</th>
          <th>Receipt No</th>
          <th>Purchase Date</th>
          <th>Purchase No</th>
          <th>Customer Name</th>
          <th>Item Name</th>
          <th>Quty</th>
          <th>Creator</th>
          <th>vehicle No</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Warehouse Name</td>
            <td>Receipt Date</td>
            <td>Receipt No</td>
            <td>Purchase Date</td>
            <td>Purchase No</td>
            <td>Customer Name</td>
            <td>Item Name</td>
            <td>Quty</td>
            <td>Creator</td>
            <td>vehicle No</td>
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

export default ManageReceiptList;
