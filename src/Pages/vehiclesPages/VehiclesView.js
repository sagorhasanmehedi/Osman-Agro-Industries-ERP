import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { CardContainer } from "../landingPage/LandingPageStyled";
import { useParams } from "react-router-dom";

const VehiclesView = () => {
  const { id } = useParams();
  return (
    <Row>
      <Col xs={12} md={5}>
        This is headaer
      </Col>
      <Col xs={12} md={7}>
        This is body
      </Col>
    </Row>
  );
};

export default VehiclesView;
