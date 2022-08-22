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
        style={{ background: "white" }}
      >
        <tbody>
          <tr className="tableHeader">
          <th>SL.</th>
            <th>Leagues</th>
            <th>Massage</th>
            <th>Length</th>
            <th>Creator</th>
            <th>Create Date&Time</th>
            <th>Send Date&Time</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
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
