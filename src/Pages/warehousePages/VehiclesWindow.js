import React from "react";
import { CardContainer, HeaderName } from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { Table } from "react-bootstrap";
import WarehouseFilter from "../../components/warehouseComponents/WarehouseFilter";

const VehiclesWindow = () => {
  return (
    <>
      <PlainText2>Vehicles Window</PlainText2>
      <WarehouseFilter />
      <StockTablle />
    </>
  );
};

export default VehiclesWindow;

function StockTablle() {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Vehicles List</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white", marginTop: "10px" }}
      >
        <tbody>
          <tr>
            <th>S.I</th>
            <th>Warehouse Nmae</th>
            <th>Date</th>
            <th>Delivery No</th>
            <th>Sale No</th>
            <th>Sate Date</th>
            <th>Customer Name</th>
            <th>Item Name</th>
            <th>Qunty</th>
            <th>Creator</th>
            <th>Scale Id</th>
            <th>Vehicle No</th>
            <th>Amount</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Warehouse Nmae</td>
              <td>Date</td>
              <td>Delivery No</td>
              <td>Sale No</td>
              <td>Sate Date</td>
              <td>Customer Name</td>
              <td>Item Name</td>
              <td>Qunty</td>
              <td>Creator</td>
              <td>Scale Id</td>
              <td>Vehicle No</td>
              <td>Amount</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
