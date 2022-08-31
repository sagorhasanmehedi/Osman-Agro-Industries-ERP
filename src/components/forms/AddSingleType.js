import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const AddSingleType = ({ windowHeader, inputName, setData, handleSubmit }) => {
  return (
    <CardContainer>
      <HeaderName>{windowHeader}</HeaderName>
      <Row xs={1} sx={2} md={3}>
        {inputName?.map((name, index) => (
          <Col key={index}>
            <Input
              name={name?.value}
              placeholder={`Enter ${name.placeHolderName}`}
              onChange={(e) => setData({})}
            />
          </Col>
        ))}
      </Row>
      <ContainerPosition Margin="10px 0px 0px">
        <Button onClick={handleSubmit}>Submit</Button>
      </ContainerPosition>
    </CardContainer>
  );
};

export default AddSingleType;
