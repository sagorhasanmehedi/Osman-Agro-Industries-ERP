import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import CustomerDetails from "../../../components/sales/sales/CustomerDetails";
import ItemDetails from "../../../components/sales/ItemDetails";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
  Lavel,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import SaleInvoiceInfo from "../../../components/sales/sales/SaleInvoiceInfo";

const Challan = () => {
  return (
    <>
      <CardContainer>
        <HeaderName>Customer Details</HeaderName>
        <ChanllanInfo />
        <HeaderName>Challan Details</HeaderName>
        <ChallanDetails />
        <HeaderName>Vehicle and Driver Details</HeaderName>
        <VehicleDetails />
        <HeaderName>Item Details</HeaderName>
        <ItemDetails />
        <HeaderName>Vehicle Rent Details</HeaderName>
        <VehicleRent />
      </CardContainer>
    </>
  );
};

export default Challan;

function ChanllanInfo() {
  return (
    <Row>
      <Col xs={12} sm={6}>
        <CustomerDetails />
      </Col>
      <Col xs={12} sm={6}>
        <SaleInvoiceInfo />
      </Col>
    </Row>
  );
}

function ChallanDetails() {
  return (
    <>
      <Row xs={1} sm={2}>
        <Col>
          <TextAriea rows={5} placeholder="Details..." />
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
                <th>Challan No</th>
                <th></th>
              </tr>
              <tr>
                <th>Challan Date</th>
                <th></th>
              </tr>
              <tr>
                <th>sale Invoice No</th>
                <th></th>
              </tr>
              <tr>
                <th>Created By</th>
                <th></th>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

function VehicleDetails() {
  return (
    <Row xs={1} sm={2}>
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
              <th colSpan={2} style={{ textAlign: "center" }}>
                Vehicle & Owner Datails
              </th>
            </tr>
            <tr>
              <th>Truc No</th>
              <th></th>
            </tr>
            <tr>
              <th>Registration No</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Name</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Address</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Mobile No</th>
              <th></th>
            </tr>
            <tr>
              <th>Rent Office</th>
              <th></th>
            </tr>
            <tr>
              <th>Rent Office Mobile No</th>
              <th></th>
            </tr>
          </tbody>
        </Table>
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
              <th colSpan={2} style={{ textAlign: "center" }}>
                Driver Datails
              </th>
            </tr>
            <tr>
              <th>Truc No</th>
              <th></th>
            </tr>
            <tr>
              <th>Registration No</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Name</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Address</th>
              <th></th>
            </tr>
            <tr>
              <th>Owner Mobile No</th>
              <th></th>
            </tr>
            <tr>
              <th>Rent Office</th>
              <th></th>
            </tr>
            <tr>
              <th>Rent Office Mobile No</th>
              <th></th>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

function VehicleRent() {
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
          <th>Receiver Name</th>
          <th colSpan={2}>In word </th>
        </tr>
        <tr>
          <th>Rent Office Fee</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Vehicle Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Advanced Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
        <tr>
          <th>Due Rent</th>
          <th>500</th>
          <th>In word </th>
        </tr>
      </tbody>
    </Table>
  );
}
