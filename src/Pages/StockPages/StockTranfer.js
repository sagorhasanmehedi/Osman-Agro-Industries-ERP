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

const StockTranfer = () => {
  return (
    <>
      <PlainText2>Stock Tranfers Window</PlainText2>
      <FilterSection />
      <TranferTable />
    </>
  );
};

export default StockTranfer;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Button style={{ marginRight: "auto" }}>Add Transfer</Button>
      <Lavel>Start Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Lavel>End Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Button>Search</Button>
    </ButtonGroupContainer>
  );
}

function TranferTable() {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Stock Tranfer Table</HeaderName>
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
            <th>From Tranfer</th>
            <th>To Tranfer</th>
            <th>Date</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Product Nmae</td>
              <td>From Tranfer</td>
              <td>To Tranfer</td>
              <td>Date</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
