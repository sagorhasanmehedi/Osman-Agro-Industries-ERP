import React from "react";
import { Table } from "react-bootstrap";
import {
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";

const CashCounterList = () => {
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
            <th>Date</th>
            <th>Voucher No</th>
            <th>Voucher type</th>
            <th>Account</th>
            <th>Credit Amount</th>
            <th>Debit Amount </th>
            <th>Cash Balance</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Date</td>
              <td>Voucher No</td>
              <td>Voucher type</td>
              <td>Account</td>
              <td>Credit Amount</td>
              <td>Debit Amount </td>
              <td>Cash Balance</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default CashCounterList;
