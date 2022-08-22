import React from "react";
import { Button, Table } from "react-bootstrap";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";

const SendingForm = () => {
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
            <th>Mobile No</th>
            <th>Account Name</th>
            <th>Massage</th>
            <th>Creator</th>
            <th>Create Time</th>
            <th>Length</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Mobile No</td>
              <td>Account Name</td>
              <td>Massage</td>
              <td>Creator</td>
              <td>Create Time</td>
              <td>Length</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default SendingForm;
