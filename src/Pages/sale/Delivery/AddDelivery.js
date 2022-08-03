import React from "react";
import {
  Button,
  HeaderName,
  Input,
  Lavel,
  PlainText,
  Select,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import { Table, Row, Col } from "react-bootstrap";
import DeliveryItem from "../../../components/sales/delivery/DeliveryItem";
import NewDeliveryItem from "../../../components/sales/delivery/NewDeliveryItem";
import CustomerDetails from "../../../components/sales/sales/CustomerDetails";
import SaleInvoiceInfo from "../../../components/sales/sales/SaleInvoiceInfo";

const AddDelivery = () => {
  return (
    <>
      <PlainText2>Add Delivery</PlainText2>
      <HeaderName>Customer Details</HeaderName>
      <Row>
        <Col xs={12} sm={6}>
          <CustomerDetails />
        </Col>
        <Col xs={12} sm={6}>
          <SaleInvoiceInfo />
        </Col>
      </Row>
      <HeaderName>Item List</HeaderName>
      <ItemDetails />
      <DeliveryMethod />
      <DeliverySummary />
    </>
  );
};

export default AddDelivery;

function DeliveryMethod() {
  return (
    <>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Delivery Method</Lavel>
          <Select>
            <option>DeliveryMethod 1</option>
            <option>DeliveryMethod 2</option>
            <option>DeliveryMethod 3</option>
          </Select>
          <Lavel>Vehicle Method</Lavel>
          <Select>
            <option>VehicleMethod 1</option>
            <option>VehicleMethod 2</option>
            <option>VehicleMethod 3</option>
          </Select>
        </Col>

        <Col>
          <ShowVehicle />
        </Col>
      </Row>
    </>
  );
}

function ShowVehicle() {
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
          <th colSpan={2} style={{ textAlign: "center" }}>
            Show Vehicle
          </th>
        </tr>
        <tr>
          <th>Available</th>
          <th>Unavailable</th>
        </tr>
        {Array.from({ length: 4 }).map((_, idx) => (
          <tr>
            <td>001134</td>
            <td>0011346</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function ItemDetails() {
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
        <DeliveryItem />
        <NewDeliveryItem />
      </tbody>
    </Table>
  );
}

function DeliverySummary() {
  return (
    <>
      <HeaderName> Delivery Summary</HeaderName>
      <Row xs={1} sm={2}>
        <Col>
          <TextAriea type="text" rows="3" placeholder="Details...." />
        </Col>
        <Col>
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
                <th>Total Order : </th>
                <th>500</th>
              </tr>
              <tr>
                <th>Total Delivery : </th>
                <th>300</th>
              </tr>
              <tr>
                <th>Pendding Delivery : </th>
                <th>200</th>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button Padding="10px 40px"> Save </Button>
        </Col>
      </Row>
    </>
  );
}
