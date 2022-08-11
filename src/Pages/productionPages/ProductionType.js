import React from "react";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { Table, Row, Col } from "react-bootstrap";

const ProductionType = () => {
  return (
    <>
      <PlainText2>Production Type</PlainText2>
      <CardContainer>
        <ProductionTypeForm />
      </CardContainer>
      <CardContainer>
        <HeaderName>Production Type List</HeaderName>
        <ProductionTypeList />
      </CardContainer>
    </>
  );
};

export default ProductionType;

function ProductionTypeForm() {
  return (
    <>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Add Production Type</Lavel>
          <Input placeholder="Enter Type Name" />
        </Col>
        <Col></Col>
        <Col
          style={{
            display: "flex",
            alignSelf: "end",
            justifyContent: "end",
          }}
        >
          <Button Padding="10px 40px">Save</Button>
        </Col>
      </Row>
    </>
  );
}

function ProductionTypeList() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white", marginTop: "10px", width: "700px" }}
    >
      <tbody>
        <tr>
          <th>S.I</th>
          <th>Production Type</th>
        </tr>
        {Array.from({ length: 4 }).map((_, index) => (
          <tr>
            <th>S.I</th>
            <th>Production Type</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
