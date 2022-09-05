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

const FuelManagement = () => {
  return (
    <>
      <PlainText2>Fuel Management</PlainText2>
      <FuelNav />
      <FuelList />
    </>
  );
};

export default FuelManagement;

function FuelNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add Fuel</Button>
      <Input Width="300px" placeholder="serch Fuel" />
    </PlainHeaderContainer>
  );
}

function FuelList() {
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
            <th>Fuel Fill Date</th>
            <th>Vehicles</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Fuel Fill By</th>
            <th>Autometer Reading</th>
            <th>Components</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Fuel Fill Date</td>
              <td>Vehicles</td>
              <td>Quantity</td>
              <td>Total Price</td>
              <td>Fuel Fill By</td>
              <td>Autometer Reading</td>
              <td>Components</td>

              <td>
                <ActionAll />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
