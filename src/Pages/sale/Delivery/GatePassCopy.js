import React from "react";
import { Table } from "react-bootstrap";
import CustomerDetails from "../../../components/sales/sales/CustomerDetails";
import DeliveryItem from "../../../components/sales/delivery/DeliveryItem";
import VehiclesDetails from "../../../components/sales/delivery/VehiclesDetails";
import { HeaderName } from "../../landingPage/LandingPageStyled";

const GatePassCopy = () => {
  return (
    <>
      <HeaderName>Customer Details</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <CustomerDetails />
        </tbody>
      </Table>
      <HeaderName>Vehicles Details</HeaderName>
      <VehiclesDetails />

      <HeaderName>Delivery Item</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <DeliveryItem />
        </tbody>
      </Table>
    </>
  );
};

export default GatePassCopy;
