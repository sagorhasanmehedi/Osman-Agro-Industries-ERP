import React from "react";
import { Col } from "react-bootstrap";
import { Input } from "../../Pages/landingPage/LandingPageStyled";

const DynamicInput = ({ inputName, inputType, setData }) => {
  return (
    <Col>
      <Input name={inputName} type={inputType} onChange={(e) => setData({})} />
    </Col>
  );
};

export default DynamicInput;
