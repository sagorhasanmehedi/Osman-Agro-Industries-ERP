import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
} from "../../Pages/landingPage/LandingPageStyled";

const OutboxForm = () => {
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
            <th>Length</th>
            <th>Create Date&Time</th>
            <th>Un-Sent Date&Time</th>
            <th>Re-Send</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Mobile No</td>
              <td>Account Name</td>
              <td>Massage</td>
              <td>Length</td>
              <td>Create Date&Time</td>
              <td>Un-Sent Date&Time</td>
              <td>
                <Button>Send</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default OutboxForm;
