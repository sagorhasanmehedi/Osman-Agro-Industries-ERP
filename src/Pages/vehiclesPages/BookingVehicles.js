import React from "react";
import {
  CardContainer,
  Button,
  Input,
  PlainHeaderContainer,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";
import { ActionAll } from "../../components/shared/ActionButtons";

const BookingVehicles = () => {
  return (
    <>
      <PlainText2>Booking List</PlainText2>
      <BookingNav />
      <BookingList />
    </>
  );
};

export default BookingVehicles;

function BookingNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add Booking</Button>
      <Input Width="300px" placeholder="search booking" />
    </PlainHeaderContainer>
  );
}

function BookingList() {
  const handleAction = (id, action) => {
    console.log(id, action);
  };
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
            <th>Customer</th>
            <th>Vehicles</th>
            <th>Type</th>
            <th>Driver</th>
            <th>Trip Status</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Customer</td>
              <td>Vehicles</td>
              <td>Type</td>
              <td>Driver</td>
              <td>Trip Status</td>
              <td>
                <ActionAll id={index} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
