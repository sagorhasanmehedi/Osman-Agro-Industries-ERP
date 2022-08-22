import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "../../../Pages/landingPage/LandingPageStyled";

const GatewaysForm = () => {
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
            <th>Getaway Name</th>
            <th>Getaway Code</th>
            <th>Mobile Number</th>
            <th>Mobile Balance</th>
            <th>SMS Balance</th>
            <th> SMS Validity</th>
            <th>USD Dial</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Getaway Name</td>
              <td>Getaway Code</td>
              <td>Mobile Number</td>
              <td>Mobile Balance</td>
              <td>SMS Balance</td>
              <td> SMS Validity</td>
              <td>USD Dial</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default GatewaysForm;
