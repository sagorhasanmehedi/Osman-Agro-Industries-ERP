import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  ContainerPosition,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import {
  Button,
  CardContainer,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const ThanaLocation = () => {
  return (
    <>
      <CardContainer>
        <HeaderName>Add Thana </HeaderName>
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
            <Input
              name="ThanaCode"
              type="number"
              placeholder="Enter your Thana Code"
            />
          </Col>
          <Col>
            <Input name="ThanaName" placeholder="Enter your Thana name" />
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

export default ThanaLocation;

function CategoryList() {
  return (
    <CardContainer>
      <HeaderName>Thana List</HeaderName>
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
          <th>Thana Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, idx) => (
          <tr key={idx}>
            <td>Id</td>
            <td>Thana Name</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
