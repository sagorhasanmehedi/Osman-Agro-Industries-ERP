import React from "react";
import Table from "react-bootstrap/Table";
import {
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";

const SaleWindowTable = () => {
  return (
    <CardContainer>
      <HeaderName>Sale Details List</HeaderName>
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
            <th>Si</th>
            <th>Invoice</th>
            <th>Status</th>
            <th>Vehicle No</th>
            <th>Net Bill</th>
            <th>Pail Bill</th>
            <th>Due Bill </th>
            <th>Rent Office Fee </th>
            <th>Creator</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Si</td>
              <td>Invoice</td>
              <td>Status</td>
              <td>Vehicle No</td>
              <td>Net Bill</td>
              <td>Pail Bill</td>
              <td>Due Bill </td>
              <td>Rent Office Fee </td>
              <td>Creator</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default SaleWindowTable;
