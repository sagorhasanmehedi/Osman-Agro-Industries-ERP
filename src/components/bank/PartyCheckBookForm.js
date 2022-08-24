import React from "react";
import { Table } from "react-bootstrap";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const PartyCheckBookForm = () => {
  return (
    <>
      <HeaderName>Party Check Book</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>SL.</th>
            <th>Book No</th>
            <th>Check No</th>
            <th>Account No</th>
            <th>Issue Date</th>
            <th>Processed Date</th>
            <th>Amount</th>
            <th>Statues</th>
          </tr>

          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Book No</td>
              <td>Check No</td>
              <td>Account No</td>
              <td>Issue Date</td>
              <td>Processed Date</td>
              <td>Amount</td>
              <td>Statues</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PartyCheckBookForm;
