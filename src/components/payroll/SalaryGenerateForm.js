import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,

} from "../../Pages/landingPage/LandingPageStyled";

const SalaryGenerateForm = () => {
  return (
    <CardContainer>
      <Row >
        <Col>
          <Lavel>Salary Slip No</Lavel>
          <Input />
        </Col>
        <Col>
          <Lavel>Account No</Lavel>
          <Input name="barCode" />
        </Col>
        <Col>
          <Lavel>Account Name</Lavel>
          <Input name="lot" />
        </Col>
        <Col>
          <Lavel>Mobile No</Lavel>
          <Input name="productModel" />
        </Col>
        <Col>
          <Lavel>Joining Date </Lavel>
          <Input name="lot" />
        </Col>
        <Col>
          <Lavel>Basic Salary </Lavel>
          <Input name="lot" />
        </Col>
        <Col>
          <Lavel>Medical Fee (+)</Lavel>
          <Input name="khatAccout" />
        </Col>
        <Col>
          <Lavel>Transport Fee (+) </Lavel>
          <Input name="lot" />
        </Col>
        <Col>
          <Lavel>Gross Salary</Lavel>
          <Input name="batchNo" />
        </Col>
        <Col>
          <Lavel>Provident Fund (-)</Lavel>
          <Input name="productSetialNo" />
        </Col>
        <Col>
          <Lavel>Late / Early(-) </Lavel>
          <Input name="supplierPrice" />
        </Col>
        <Col>
          <Lavel>Absent</Lavel>
          <Input name="ourPrice" />
        </Col>
        <Col>
          <Lavel> Total Deduction</Lavel>
          <Input name="ourPrice" />
        </Col>
        <Col>
          <Lavel>Net Salary </Lavel>
          <Input name="ourPrice" />
        </Col>
        <Col>
          <Lavel>Action</Lavel>
          <Input name="ourPrice" />
        </Col>
      </Row>
      <ContainerPosition Possition="end">
        <Button>Save</Button>
      </ContainerPosition>
    </CardContainer>
  );
};

export default SalaryGenerateForm;
