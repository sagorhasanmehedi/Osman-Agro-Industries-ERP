import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "../../Pages/landingPage/LandingPageStyled";

const CheckReportForm = () => {
  return (
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
          <th>Invoice No</th>
          <th>Party Account</th>
          <th>Bank Account</th>
          <th>Check No</th>
          <th>Issued Date</th>
          <th>Processed Date</th>
          <th>Amount</th>
          <th>Statues</th>
          <th>Check</th>
          <th>Print</th>
        </tr>

        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Invoice No</td>
            <td>Party Account</td>
            <td>Bank Account</td>
            <td>Check No</td>
            <td>Issued Date</td>
            <td>Processed Date</td>
            <td>Amount</td>
            <td>Statues</td>
            <td>Check</td>
            <td>
              <Button>Print</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CheckReportForm;
