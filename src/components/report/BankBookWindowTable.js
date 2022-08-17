import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";

const BankBookWindowTable = () => {
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
            <th> SL.</th>
            <th>Date</th>
            <th> Account Id</th>
            <th>Hade Of Account</th>
            <th>Account No</th>
            <th>Credit Amount</th>
            <th>Debit Amount</th>
            <th>Bank Balance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td> SL.</td>
              <td>Date</td>
              <td> Account Id</td>
              <td>Hade Of Account</td>
              <td>Account No</td>
              <td>Credit Amount</td>
              <td>Debit Amount</td>
              <td>Bank Balance</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default BankBookWindowTable;
