import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AddBrand = () => {
  return (
    <>
      <PlainText2>Brand</PlainText2>
      <CardContainer>
        <HeaderName>Add Brand</HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Input name="brandName" placeholder="Enter your brand name" />
            <Button>Submit</Button>
          </Col>
        </Row>
      </CardContainer>
      <BrandList />
    </>
  );
};

export default AddBrand;

function BrandList() {
  return (
    <CardContainer>
      <HeaderName>Brand List</HeaderName>
      <BrandListTable />
    </CardContainer>
  );
}

function BrandListTable() {
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
          <th>Brand Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Brand Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
