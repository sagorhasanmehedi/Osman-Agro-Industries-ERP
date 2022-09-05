import React from "react";
import {
  CardContainer,
  Button,
  Input,
  PlainHeaderContainer,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";
import { ActionDelete } from "../../components/shared/ActionButtons";

const ReminderVehicles = () => {
  return (
    <>
      <PlainText2>Reminder</PlainText2>
      <ReminderNav />
      <ReminderList />
    </>
  );
};

export default ReminderVehicles;

function ReminderNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add Reminder</Button>
      <Input Width="300px" placeholder="serch Remainder" />
    </PlainHeaderContainer>
  );
}

function ReminderList() {
  return (
    <CardContainer>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{
          background: "white",
        }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>SL.</th>
            <th>Vehicles</th>
            <th>Date</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Vehicles</td>
              <td>Date</td>
              <td>Message</td>
              <td>
                <ActionDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
