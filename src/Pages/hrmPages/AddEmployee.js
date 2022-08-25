import React from "react";
import {
  Button,
  ContainerPosition,
  Select,
  Lavel,
  Input,
  CardContainer,
} from "../landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";

const AddEmployee = () => {
  return (
    <>
      <PlainText2>Add Employee</PlainText2>
      <CardContainer>
        <Row xs={1} sm={2} md={3}>
          <Col>
            <Lavel>Name</Lavel>
            <Input type="text" name="Name" />
          </Col>
          <Col>
            <Lavel>Division</Lavel>
            <Select>
              <option>division</option>
              <option>division</option>
            </Select>
          </Col>
          <Col>
            <Lavel>Designation</Lavel>
            <Select>
              <option>division</option>
              <option>division</option>
            </Select>
          </Col>
          <Col>
            <Lavel>Mobile Number</Lavel>
            <Input type="tel" name="Phone2" />
          </Col>
          <Col>
            <Lavel>Address</Lavel>
            <Input type="text" name="Phone2" />
          </Col>
          <Col>
            <Lavel>Status</Lavel>
            <Select>
              <option>Enable</option>
              <option>Disable</option>
            </Select>
          </Col>
        </Row>
        <ContainerPosition>
          <Button>Save</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default AddEmployee;
