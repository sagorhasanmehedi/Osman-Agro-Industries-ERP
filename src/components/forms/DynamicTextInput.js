import React from "react";
import { Col } from "react-bootstrap";
import { Input, Lavel } from "../../Pages/landingPage/LandingPageStyled";

const DynamicTextInput = ({ inputName, setData }) => {
  return (
    <>
      {inputName?.map((name, index) => (
        <Col key={index}>
          {/* <Lavel>{name?.value}</Lavel> */}
          <Input
            type={name?.inputType ? name.inputType : "text"}
            name={name?.value}
            placeholder={`Enter ${name.placeHolderName}`}
            onChange={(e) => setData({})}
          />
        </Col>
      ))}
    </>
  );
};

export default DynamicTextInput;
