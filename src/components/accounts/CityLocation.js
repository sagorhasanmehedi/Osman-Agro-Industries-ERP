import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const CityLocation = () => {
  return (
    <>
      <CardContainer>
        <HeaderName>Add City </HeaderName>
        <Row xs={1} sx={2} md={3}>
          <Col>
            <Input
              name="cityCode"
              type="number"
              placeholder="Enter your City Code"
            />
          </Col>
          <Col>
            <Input name="cityName" placeholder="Enter your City name" />
          </Col>
        </Row>
        <ContainerPosition Possition="end">
          <Button>Submit</Button>
        </ContainerPosition>
      </CardContainer>
      <CategoryList />
    </>
  );
};

export default CityLocation;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>City List</HeaderName>
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
      <tbody>
        <tr className="tableHeader">
          <th>Id</th>
          <th>City Name</th>
        </tr>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>City Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
