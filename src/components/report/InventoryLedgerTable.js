import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";

const InventoryLedgerTable = () => {
  return (
    <CardContainer>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <thead>
          <tr>
            <th>SL.</th>
            <th>Date</th>
            <th>Warehouse Name</th>
            <th>Item Name</th>
            <th>Old Quty</th>
            <th>Delivery Quty</th>
            <th>Receipt Quty </th>
            <th>Balance Qnty </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>SL.</td>
              <td>Date</td>
              <td>Warehouse Name</td>
              <td>Item Name</td>
              <td>Old Quty</td>
              <td>Delivery Quty</td>
              <td>Receipt Quty </td>
              <td>Balance Qnty </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default InventoryLedgerTable;
