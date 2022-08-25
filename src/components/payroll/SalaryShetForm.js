import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";

const SalaryShetForm = () => {
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
        <tbody>
          <tr className="tableHeader">
            <th>SL.</th>
            <th>Salary Slip No</th>
            <th>Account No </th>
            <th>Account Name</th>
            <th>Mobile No </th>
            <th>Joining Date</th>
            <th>Basic Salary </th>
            <th>Medical Fee (+)</th>
            <th>Transport Fee (+)</th>
            <th>Gross Salary </th>
            <th>Provident Fund (-)</th>
            <th>Late / Early(-) </th>
            <th>Absent</th>
            <th>Tax</th>
            <th> Total Deduction</th>
            <th>Net Salary </th>
            <th>Old Balance</th>
            <th>Curent Balance</th>
            <th>Khat Name</th>
            <th>Invoice Name</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Salary Slip No</td>
              <td>Account No </td>
              <td>Account Name</td>
              <td>Mobile No </td>
              <td>Joining Date</td>
              <td>Basic Salary </td>
              <td>Medical Fee (+)</td>
              <td>Transport Fee (+)</td>
              <td>Gross Salary </td>
              <td>Provident Fund (-)</td>
              <td>Late / Early(-) </td>
              <td>Absent</td>
              <td>Tax</td>
              <td> Total Deduction</td>
              <td>Net Salary </td>
              <td>Old Balance</td>
              <td>Curent Balance</td>
              <td>Khat Name</td>
              <td>Invoice Name</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default SalaryShetForm;
