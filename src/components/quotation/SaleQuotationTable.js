import React from "react";
import { Dropdown, Table } from "react-bootstrap";

const SaleQuotationTable = () => {
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
          <th>Quotation No</th>
          <th>Customer Name</th>
          <th>Quotation Date</th>
          <th>Invoice Date</th>
          <th>Item Total</th>
          <th>Service Total</th>
          <th>Status</th>
          <th> Action</th>
          <th> Order Ref:</th>
        </tr>

        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Quotation No</td>
            <td>Customer Name</td>
            <td>Quotation Date</td>
            <td>Invoice Date</td>
            <td>Item Total</td>
            <td>Service Total</td>
            <td>Status</td>
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
            <td> Order Ref</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SaleQuotationTable;
