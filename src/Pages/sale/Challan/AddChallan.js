import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemDetails from "../../../components/sales/ItemDetails";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
  PlainText,
  Select,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import ChallanReceiver from "../../../components/sales/challan/ChallanReceiver";

const AddChallan = () => {
  const navigation = useNavigate();
  const handleCilick = () => {
    navigation("/dashboard/saleInvoice");
  };
  return (
    <>
      <PlainText2>Add Challan</PlainText2>

      <Row style={{ maxWidth: "1091px" }}>
        <Col xs={12} sm={6}>
          <CardContainer>
            <PlainText Color="red">Main accounts</PlainText>
            <ChallanReceiver />
          </CardContainer>
        </Col>

        <Col xs={12} sm={6}>
          <CardContainer>
            <PlainText Color="red">To/Receiver</PlainText>
            <Select>
              <option>serach and select</option>
              <option>serach and select</option>
              <option>serach and select</option>
            </Select>
            <ChallanReceiver />
          </CardContainer>
        </Col>
        <Col xs={12}>
          <CardContainer>
            <HeaderName>Challan Details</HeaderName>
            <ChallanDetails />
          </CardContainer>
        </Col>
        <Col xs={12}>
          <CardContainer>
            <HeaderName>Vehicle and Driver Details</HeaderName>
            <VehicleDetails />
          </CardContainer>
        </Col>
        <Col xs={12}>
          <CardContainer>
            <HeaderName>Vehicle Rent Details</HeaderName>
            <VehicleRent />
          </CardContainer>
        </Col>
      </Row>

      <CardContainer>
        <HeaderName>Item Details</HeaderName>
        <ItemDetails />

        <Row>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Button Padding="10px 40px" onClick={handleCilick}>
              Save
            </Button>
          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

export default AddChallan;

function ChallanDetails() {
  return (
    <Row xs={1} sm={2}>
      <Col>
        <TextAriea rows={6} placeholder="Details..." />
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
          <th colSpan={2}>
            <Input type="text" />
          </th>
        </tr>
        <tr>
          <th>Rent Office Fee</th>
          <th>
            <Input type="number" />{" "}
          </th>
          <th>
            <Input type="text" />{" "}
          </th>
        </tr>
        <tr>
          <th>Vehicle Rent</th>
          <th>
            <Input type="number" />{" "}
          </th>
          <th>
            <Input type="text" />{" "}
          </th>
        </tr>
        <tr>
          <th>Advanced Rent</th>
          <th>
            <Input type="number" />{" "}
          </th>
          <th>
            <Input type="text" />{" "}
          </th>
        </tr>
        <tr>
          <th>Due Rent</th>
          <th>
            <Input type="number" />{" "}
          </th>
          <th>
            <Input type="text" />{" "}
          </th>
        </tr>
      </tbody>
    </Table>
  );
}
