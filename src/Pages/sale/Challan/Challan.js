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
  );
}

function ChallanDetails() {
  return (
    <>
      <Row xs={1} sm={2}>
        <Col>
          <TextAriea rows={8} placeholder="Details..." />
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
                <th>
                  <Input type="number" style={{ margin: "0px" }} />
                </th>
              </tr>
              <tr>
                <th>Challan Date</th>
                <th>
                  <Input type="date" style={{ margin: "0px" }} />
                </th>
              </tr>
              <tr>
                <th>sale Invoice No</th>
                <th>
                  <Input type="number" style={{ margin: "0px" }} />
                </th>
              </tr>
              <tr>
                <th>Created By</th>
                <th>
                  <Input type="text" style={{ margin: "0px" }} />
                </th>
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
              <th colSpan={2}>Vehicle & Owner Datails</th>
            </tr>
            <tr>
              <th>Truc No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Registration No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Name</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Address</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Mobile No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Rent Office</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Rent Office Mobile No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
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
              <th colSpan={2}>Driver Datails</th>
            </tr>
            <tr>
              <th>Truc No</th>
              <th>
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Registration No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Name</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Address</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Owner Mobile No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Rent Office</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
            </tr>
            <tr>
              <th>Rent Office Mobile No</th>
              <th>
                {" "}
                <Input type="number" style={{ margin: "0px" }} />
              </th>
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
