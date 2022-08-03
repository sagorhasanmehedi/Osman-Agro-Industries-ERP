import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import CustomerDetails from "../../../components/sales/sales/CustomerDetails";
import DeliveryItem from "../../../components/sales/delivery/DeliveryItem";
import VehiclesDetails from "../../../components/sales/delivery/VehiclesDetails";
import { HeaderName } from "../../landingPage/LandingPageStyled";
import SaleInvoiceInfo from "../../../components/sales/sales/SaleInvoiceInfo";
const DeliveryCopy = () => {
  return (
    <>
      <HeaderName>Customer Details</HeaderName>
      <Row>
        <Col xs={12} sm={6}>
          <CustomerDetails />
        </Col>
        <Col xs={12} sm={6}>
          <SaleInvoiceInfo />
        </Col>
      </Row>
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

export default DeliveryCopy;
