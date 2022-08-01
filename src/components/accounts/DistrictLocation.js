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

const DistrictLocation = () => {
  return (
    <>
      <CardContainer>
        <HeaderName>Add District </HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Select name="cityName">
              {[1, 2, 3, 4].map((value, index) => (
                <option>city name</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Input
              name="DistrictCode"
              type="number"
              placeholder="Enter your District Code"
            />
          </Col>
          <Col>
            <Input name="DistrictName" placeholder="Enter your District name" />
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

export default DistrictLocation;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>District List</HeaderName>
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
          <th>District Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>District Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
