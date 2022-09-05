import React from "react";
import { Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";

const SingleFormContainer = ({ windowHeader, handleSubmit, children }) => {
  return (
    <CardContainer>
      <HeaderName>{windowHeader}</HeaderName>
      <Row xs={1} sx={2} md={3}>
        {children}
      </Row>
      <ContainerPosition Margin="10px 0px 0px">
        <Button onClick={handleSubmit}>Submit</Button>
      </ContainerPosition>
    </CardContainer>
  );
};

export default SingleFormContainer;
