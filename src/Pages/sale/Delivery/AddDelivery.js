import React from "react";
import {
  Button,
  CardContainer,
  HeaderName,
  Lavel,
  Select,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import { Table, Row, Col } from "react-bootstrap";
import NewDeliveryItem from "../../../components/sales/delivery/NewDeliveryItem";
import SaleInvoiceInfo from "../../../components/sales/sales/SaleInvoiceInfo";
import ChallanReceiver from "../../../components/sales/challan/ChallanReceiver";

const AddDelivery = () => {
  return (
    <>
      <PlainText2>Add Delivery</PlainText2>

      <Row style={{ maxWidth: "1091px" }}>
        <Col xs={12} sm={6}>
          <CardContainer>
            <Lavel>Customer Details</Lavel>
            <ChallanReceiver />
          </CardContainer>
        </Col>
        <Col xs={12} sm={6}>
          <CardContainer>
            <Lavel>Invoice Details</Lavel>
            <SaleInvoiceInfo />
          </CardContainer>
        </Col>
        <Col xs={12}>
          <CardContainer>
            <DeliveryMethod />
          </CardContainer>
        </Col>
      </Row>
      <CardContainer>
        <Lavel>Item List</Lavel>
        <NewDeliveryItem />
      </CardContainer>
      <CardContainer>
        <DeliverySummary />
      </CardContainer>
    </>
  );
};

export default AddDelivery;

function DeliveryMethod() {
  return (
    <Row xs={1} sm={2}>
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
