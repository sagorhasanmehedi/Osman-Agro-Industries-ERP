import React from "react";
import { Table } from "react-bootstrap";
import { HeaderName } from "../../../Pages/landingPage/LandingPageStyled";

const VehiclesDetails = () => {
  return (
    <>
      <HeaderName>Vehicles Details</HeaderName>

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
            <th>Truc Number</th>
            <th>Owner Name and Mobile</th>
            <th>Driver Name</th>
            <th>Driver Mobile</th>
          </tr>
          {[1].map((valeu, index) => (
            <tr key={index}>
              <td>Truc Number</td>
              <td>Owner Name and Mobile</td>
              <td>Driver Name</td>
              <td>Driver Mobile</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default VehiclesDetails;
