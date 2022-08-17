import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";

const CashBookWindowTable = () => {
  return (
    <CardContainer>
      <HeaderName>Opening Cash Balance</HeaderName>
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
            <th> SL.</th>
            <th>Date</th>
            <th>Voucher No</th>
            <th>Voucher Type</th>
            <th>Account</th>
            <th>Credit Amount</th>
            <th>Debit Amount</th>
            <th>Cash Balance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td> SL.</td>
              <td>Date</td>
              <td>Voucher No</td>
              <td>Voucher Type</td>
              <td>Account</td>
              <td>Credit Amount</td>
              <td>Debit Amount</td>
              <td>Cash Balance</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <Button>Send</Button>
      </div>
    </CardContainer>
  );
};

export default CashBookWindowTable;
