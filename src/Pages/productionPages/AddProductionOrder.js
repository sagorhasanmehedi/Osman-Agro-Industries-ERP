import React from "react";
import {
  Button,
  CardContainer,
  ContainerCenter,
  HeaderName,
  Input,
  Lavel,
  Select,
  TextAriea,
} from "../landingPage/LandingPageStyled";
import { Table, Row, Col } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";

const AddProductionOrder = () => {
  return (
    <>
      <PlainText2>Add Production Order</PlainText2>
      <ProductionForm />
    </>
  );
};

export default AddProductionOrder;

function ProductionForm() {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Scale Id</Lavel>
          <Select>
            <option>Scale type</option>
            <option>Scale type</option>
            <option>Scale type</option>
            <option>Scale type</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Party Name</Lavel>
          <Select>
            <option>Party Name</option>
            <option>Party Name</option>
            <option>Party Name</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Item Name</Lavel>
          <Select>
            <option>Item Name</option>
            <option>Item Name</option>
            <option>Item Name</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Purchases Name</Lavel>
          <Input placeholder="Purchases" />
        </Col>
        <Col>
          <Lavel>Production Name</Lavel>
          <Input placeholder="Production" />
        </Col>
        <Col>
          <Lavel>Pending Quantity</Lavel>
          <Input placeholder="Production" />
        </Col>
        <Col>
          <Lavel>Unite</Lavel>
          <Input placeholder="Unite" />
        </Col>
        <Col>
          <Lavel>Time Line Method</Lavel>
          <Select>
            <option>Time Line Method</option>
            <option>Time Line Method</option>
            <option>Time Line Method</option>
            <option>Time Line Method</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Parboiling No</Lavel>
          <Select>
            <option>Parboiling</option>
            <option>Parboiling</option>
            <option>Parboiling</option>
            <option>Parboiling</option>
          </Select>
        </Col>
      </Row>
      <HeaderName>Production Summary</HeaderName>
      <Row xs={1} sm={2}>
        <Col>
          <TextAriea rows={3} placeholder="details..." />
        </Col>
        <Col>
          <ProductionSummary />
        </Col>
      </Row>
      <ContainerCenter Possition="end">
        <Button Padding="10px 40px">Save</Button>
      </ContainerCenter>
    </CardContainer>
  );
}

function ProductionSummary() {
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
          <td>Total Order</td>
          <td>500 Bag</td>
        </tr>
        <tr>
          <td>Total Production</td>
          <td>500 Bag</td>
        </tr>
        <tr>
          <td>Pending production</td>
          <td>500 Bag</td>
        </tr>
      </tbody>
    </Table>
  );
}
