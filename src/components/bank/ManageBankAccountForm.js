import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "../../Pages/landingPage/LandingPageStyled";

const ManageBankAccountForm = () => {
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
          <th>Account ID</th>
          <th>Account Title</th>
          <th>Account No</th>
          <th>Bank Name</th>
          <th>Branch Name</th>
          <th>Status</th>
          <th>SMS Send</th>
        </tr>

        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Account ID</td>
            <td>Account Title</td>
            <td>Account No</td>
            <td>Bank Name</td>
            <td>Branch Name</td>
            <td>Status</td>
            <td>
              <Button>Send</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ManageBankAccountForm;
