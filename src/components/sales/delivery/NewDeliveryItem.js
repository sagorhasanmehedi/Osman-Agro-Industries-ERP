import React from "react";
import { Input } from "../../../Pages/landingPage/LandingPageStyled";
import { Table, Row, Col } from "react-bootstrap";

const NewDeliveryItem = () => {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white" }}
    >
      <tbody>
        <tr>
          <th>Assign Vehicle</th>
          <th>Item</th>
          <th>Order (Qty)</th>
          <th>Delivery (Qty)</th>
          <th>Pending (Qty)</th>
          <th>Unite</th>
          <th>Lot / Gallery</th>
          <th>Batch no</th>
          <th>Product sl no</th>
        </tr>
        <tr>
          <td>
            <Input type="text" Margin="0px" />
          </td>
          <td>
            <Input type="text" Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={50} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={50} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={150} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={150} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={150} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={150} Margin="0px" />
          </td>
          <td>
            <Input type="number" defaultValue={150} Margin="0px" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NewDeliveryItem;
