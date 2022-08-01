import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AddUnite = () => {
  return (
    <>
      <PlainText2>Unite</PlainText2>
      <CardContainer>
        <HeaderName>Add Unite</HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Input name="uniteName" placeholder="Enter your unite name" />
            <Button>Submit</Button>
          </Col>
        </Row>
      </CardContainer>
      <UniteList />
    </>
  );
};

export default AddUnite;

function UniteList() {
  return (
    <CardContainer>
      <HeaderName>Brand List</HeaderName>
      <UniteListTable />
    </CardContainer>
  );
}

function UniteListTable() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white" }}
    >
      <thead>
        <tr style={{ borderWidth: 0 }}>
          <th>Id</th>
          <th>Unite Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Unite Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
