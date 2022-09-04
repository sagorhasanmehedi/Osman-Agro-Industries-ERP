import React from "react";
import {
  CardContainer,
  Button,
  Input,
  PlainHeaderContainer,
} from "../landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";
import { ActionAll } from "../../components/shared/ActionButtons";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  return (
    <>
      <PlainText2>Vehicles List</PlainText2>
      <VehiclesNav />
      <VehiclesList />
    </>
  );
};

export default Vehicles;

function VehiclesNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add Vehicles</Button>
      <Input Width="300px" placeholder="serch Vehicles" />
    </PlainHeaderContainer>
  );
}

function VehiclesList() {
  const navigate = useNavigate();
  const handleAction = (id, action) => {
    navigate(`/vehicles/vehiclses/${id}`);
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
            <th>Name</th>
            <th>Model</th>
            <th>Registration No</th>
            <th>Engine No</th>
            <th>Type</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Name</td>
              <td>Model</td>
              <td>Registration No</td>
              <td>Engine No</td>
              <td>Type</td>
              <td>Created Date</td>
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
