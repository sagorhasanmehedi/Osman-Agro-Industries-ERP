import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AddAccountCategory = () => {
  return (
    <>
      <PlainText2>Account Category</PlainText2>
      <CardContainer>
        <HeaderName>Add Account Category</HeaderName>
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

export default AddAccountCategory;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>Account Category List</HeaderName>
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
          <th>Account Category Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Category Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
