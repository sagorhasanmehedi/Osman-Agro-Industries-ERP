import React from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

import { Table } from "react-bootstrap";

const WirehouseWindow = () => {
  return (
    <>
      <PlainText2>Wirehouse Window</PlainText2>
      <ButtonGroupContainer Gap="6px" Background="none" Shadow="none">
        <Lavel>Start Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />
        <Lavel>End Date</Lavel>
        <Input type="date" placeholder="Invoice Search" Width="150px" />

        <Button style={{ marginLeft: "auto" }}>Search</Button>
      </ButtonGroupContainer>
      <StockTablle />
    </>
  );
};

export default WirehouseWindow;

function StockTablle() {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Wirehouse List</HeaderName>
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
