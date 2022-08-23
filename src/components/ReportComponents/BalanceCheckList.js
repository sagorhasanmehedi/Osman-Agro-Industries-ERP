import React from "react";
import {
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";

const BalanceCheckList = () => {
  return (
    <CardContainer>
      <HeaderName Padding="0px">Balance Check List</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white", marginTop: "10px" }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>S.I</th>
            <th>Account No</th>
            <th>Account Name</th>
            <th>Adders</th>
            <th>Mobile No</th>
            <th>Balance</th>
            <th>Status</th>
            <th>SMS Send</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Account No</td>
              <td>Account Name</td>
              <td>Adders</td>
              <td>Mobile No</td>
              <td>Balance</td>
              <td>Status</td>
              <td>SMS Send</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default BalanceCheckList;
