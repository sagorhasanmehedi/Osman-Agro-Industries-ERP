import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AddAccountType = () => {
  return (
    <>
      <PlainText2>Account Type</PlainText2>
      <CardContainer>
        <HeaderName>Add Account Type</HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Input
              name="accountCategoryName"
              placeholder="Enter your Category name"
            />
            <Button>Submit</Button>
          </Col>
        </Row>
      </CardContainer>
      <CategoryList />
    </>
  );
};

export default AddAccountType;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>Account Type List</HeaderName>
      <CategoryListTable />
    </CardContainer>
  );
}

function CategoryListTable() {
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
          <th>Account Type</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Account Type</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
