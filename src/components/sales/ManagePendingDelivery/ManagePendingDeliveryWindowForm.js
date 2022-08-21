import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
} from "../../../Pages/landingPage/LandingPageStyled";

const ManagePendingDeliveryWindowForm = () => {
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
        <thead>
          <tr>
            <th>SL.</th>
            <th>Sale Date</th>
            <th>Sale Invoice No</th>
            <th>Customer Name</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Note</th>
            <th>Creator</th>
            <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Si</td>
              <td>Invoice</td>
              <td>Status</td>
              <td>Vehicle No</td>
              <td>Net Bill</td>
              <td>Pail Bill</td>
              <td>Due Bill </td>
              <td>Rent Office Fee </td>
              <td>Creator</td>
              <td>
                <ContainerPosition Possition="center" Gap="10px">
                  <Button>View</Button>
                  <Button>Update</Button>
                  <Button>Add Delivery</Button>
                </ContainerPosition>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default ManagePendingDeliveryWindowForm;
