import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
} from "../../Pages/landingPage/LandingPageStyled";

const ScheduleSMSForm = () => {
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
            <th>Leagues</th>
            <th>Massage</th>
            <th>Length</th>
            <th>Creator</th>
            <th>Create Date&Time</th>
            <th>Send Date&Time</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>SL.</td>
              <td>Leagues</td>
              <td>Massage</td>
              <td>Length</td>
              <td>Creator</td>
              <td>Create Date&Time</td>
              <td>Send Date&Time</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default ScheduleSMSForm;
