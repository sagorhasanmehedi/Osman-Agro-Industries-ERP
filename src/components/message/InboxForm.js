import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";

const InboxForm = () => {
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
            <th>Sender</th>
            <th>Company Name</th>
            <th>Massage</th>
            <th>Receive Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Sender</td>
              <td>Company Name</td>
              <td>Massage</td>
              <td>Receive Time</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default InboxForm;
