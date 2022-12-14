import React from "react";
import { HeaderName } from "../../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";

const DeliveryItem = () => {
  return (
    <>
      <HeaderName>Delivery Item</HeaderName>

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
            <th>S.I</th>
            <th>Vehicle Name</th>
            <th>Item</th>
            <th>Order</th>
            <th>Delivery</th>
            <th>Pendding</th>
            <th>Unite</th>
            <th>Lot</th>
            <th>Batch no</th>
            <th>Product SI No</th>
          </tr>
          {[1,2,3,4,5,6].map((valeu, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Vehicle Name</td>
              <td>Item</td>
              <td>Order</td>
              <td>50</td>
              <td>150</td>
              <td>Unite</td>
              <td>Lot</td>
              <td>Batch no</td>
              <td>Product SI No</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DeliveryItem;
