import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  CustomerDetails,
  SelectOne,
} from "../../components/forms/SubDetailsFormCustomer";
import { VehiclesDetails } from "../../components/forms/SubDetailsFormVehicles";
import WeightScaleItemDetails from "../../components/weightScaleComponents/WeightScaleItemDetails";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AddWeight = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/weightscale/invoice");
  };
  return (
    <>
      <PlainText2>Add Weight</PlainText2>
      <CardContainer>
        <VehicleAndCustomer />
        <WeightTransaction />
        <WeightScaleItemDetails />
        <WeightScaleBillDetails />
        <ContainerPosition>
          <Button
            Margin="20px 0px 0px 0px"
            Padding="10px 40px"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default AddWeight;

function VehicleAndCustomer() {
  return (
    <>
      <HeaderName>Vehicle & Customer Details</HeaderName>
      <Row xs={1} sm={2}>
        <Col>
          <SelectOne />
          <VehiclesDetails />
        </Col>
        <Col>
          <SelectOne />
          <CustomerDetails />
        </Col>
      </Row>
    </>
  );
}

function WeightTransaction() {
  return (
    <>
      <HeaderName>Weight Transaction</HeaderName>
      <Row>
        <Col>
          <Lavel>First Weight</Lavel>
          <Input type="text" name="Name" />
        </Col>
        <Col>
          <Lavel>Second Weight</Lavel>
          <Input type="text" name="Name" />
        </Col>
        <Col>
          <Lavel>Net Weight</Lavel>
          <Input type="text" name="Name" disabled />
        </Col>
      </Row>
    </>
  );
}

function WeightScaleBillDetails() {
  return (
    <>
      <HeaderName>Weight Scale Bill Details</HeaderName>
      <Row>
        <Col>
          <Lavel>Bill Account</Lavel>
          <Input type="text" name="Name" />
        </Col>
        <Col>
          <Lavel>Weight Fee</Lavel>
          <Input type="text" name="Name" />
        </Col>
        <Col>
          <Lavel>Cash Counter</Lavel>
          <Input type="text" name="Name" />
        </Col>
        <Col>
          <Lavel>Oparetor Not</Lavel>
          <Input type="text" name="Name" />
        </Col>
      </Row>
    </>
  );
}
