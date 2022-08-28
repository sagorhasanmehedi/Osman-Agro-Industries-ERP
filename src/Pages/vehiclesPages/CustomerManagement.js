import React from "react";
import {
  CardContainer,
  Button,
  Input,
  PlainHeaderContainer,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";

const CustomerManagement = () => {
  return (
    <>
      <PlainText2>Cutomer List</PlainText2>
      <BookingNav />
      <BookingList />
    </>
  );
};

export default CustomerManagement;

function BookingNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add Customer</Button>
      <Input Width="300px" placeholder="serch customer" />
    </PlainHeaderContainer>
  );
}

function BookingList() {
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
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>

            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Name</td>
              <td>Mobile</td>
              <td>Email</td>
              <td>Address</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
