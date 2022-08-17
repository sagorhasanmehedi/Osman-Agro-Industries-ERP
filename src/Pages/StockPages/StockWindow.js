import React from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

import { Table } from "react-bootstrap";

const StockWindow = () => {
  return (
    <>
      <PlainText2>Stock Report Window</PlainText2>
      <FilterSection />
      <StockTablle />
    </>
  );
};

export default StockWindow;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px">
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Input type="date" placeholder="Invoice Search" Width="150px" />

      <Select Width="150px">
        <option>year</option>
        <option>year</option>
        <option>year</option>
        <option>year</option>
      </Select>
      <Select Width="150px">
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
      </Select>
      <Button style={{ marginLeft: "auto" }}>Search</Button>
    </ButtonGroupContainer>
  );
}

function StockTablle() {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Stock List</HeaderName>
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
            <th>Product Nmae</th>
            <th>Product</th>
            <th>Model</th>
            <th>Sale Price</th>
            <th>purchase</th>
            <th>Prod-uction Qnty</th>
            <th>In Qnty</th>
            <th>Out Qunty</th>
            <th>Stock Now</th>
            <th>Unite</th>
            <th>Stock sale price</th>
            <th>Stok purchase price</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Product Nmae</td>
              <td>Product</td>
              <td>Model</td>
              <td>Sale Price</td>
              <td>purchase</td>
              <td>Prod-uction Qnty</td>
              <td>In Qnty</td>
              <td>Out Qunty</td>
              <td>Stock Now</td>
              <td>Unite</td>
              <td>Stock sale price</td>
              <td>Stok purchase price</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
