import React from "react";
import {
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";

const ProductionListTable = () => {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Production Order List</HeaderName>
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
            <th>Item Nmae</th>
            <th>Netting</th>
            <th>Reserved</th>
            <th>Gas/Hari</th>
            <th>Boiled</th>
            <th>Dayar/Chatal</th>
            <th>Paddy Cylo</th>
            <th>Miling</th>
            <th>Rice Cylo Parking</th>
            <th>Production Processes Complete</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Item Nmae</td>
              <td>Netting</td>
              <td>Reserved</td>
              <td>Gas/Hari</td>
              <td>Boiled</td>
              <td>Dayar/Chatal</td>
              <td>Paddy Cylo</td>
              <td>Miling</td>
              <td>Rice Cylo Parking</td>
              <td>Production Processes Complete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default ProductionListTable;
