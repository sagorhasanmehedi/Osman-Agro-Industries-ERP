import React from "react";
import { Table } from "react-bootstrap";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const WeightScaleItemDetails = () => {
  return (
    <>
      <HeaderName>Item Details</HeaderName>
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
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unite</th>
            <th>Total Weight</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Unite</td>
              <td>Total Weight</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WeightScaleItemDetails;
