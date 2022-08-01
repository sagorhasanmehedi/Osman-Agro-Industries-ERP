import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  ContainerCenter,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const UnionLocation = () => {
  return (
    <>
      <CardContainer>
        <HeaderName>Add Union </HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Select name="cityName">
              {[1, 2, 3, 4].map((value, index) => (
                <option>city name</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Select name="DistrictName">
              {[1, 2, 3, 4].map((value, index) => (
                <option>District name</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Select name="ThanaName">
              {[1, 2, 3, 4].map((value, index) => (
                <option>Thana name</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Input
              name="UnionCode"
              type="number"
              placeholder="Enter your Union Code"
            />
          </Col>
          <Col>
            <Input name="UnionName" placeholder="Enter your Union name" />
          </Col>
        </Row>
        <ContainerCenter Possition="end">
          <Button>Submit</Button>
        </ContainerCenter>
      </CardContainer>
      <CategoryList />
    </>
  );
};

export default UnionLocation;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>Union List</HeaderName>
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
          <th>Union Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Union Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
