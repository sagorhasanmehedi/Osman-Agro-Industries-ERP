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
        style={{ background: "white", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>SL.</th>
            <th>Sender</th>
            <th>Company Name</th>
            <th>Massage</th>
            <th>Receive Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
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
