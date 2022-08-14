import React from "react";
import { Row, Col } from "react-bootstrap";
import { PlainText } from "../../../Pages/landingPage/LandingPageStyled";

const ChallanVehicleDetails = () => {
  return (
    <Row xs={1} sm={2}>
      <Col>
        <PlainText Color="red">Vehicle & Owner Datails</PlainText>
        <PlainText>Truc No: </PlainText>
        <PlainText>Registration No:</PlainText>
        <PlainText>Owner Name: </PlainText>
        <PlainText>Owner Address:</PlainText>
        <PlainText>Owner Mobile No: </PlainText>
        <PlainText>Rent Office: </PlainText>
        <PlainText>Rent Office Mobile No: </PlainText>
      </Col>
      <Col>
        <PlainText Color="red">Driver Datails</PlainText>
        <PlainText>Driver Name: </PlainText>
        <PlainText>Fathers Name:</PlainText>
        <PlainText>Village: </PlainText>
        <PlainText>Post Office:</PlainText>
        <PlainText>Thana: </PlainText>
        <PlainText>District: </PlainText>
        <PlainText>Mobile No: </PlainText>
      </Col>
    </Row>
  );
};

export default ChallanVehicleDetails;
