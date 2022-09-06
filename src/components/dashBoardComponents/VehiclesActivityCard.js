import React from "react";
import {
  CardContainer,
  HeaderName,
  SelfContainer,
} from "../../Pages/landingPage/LandingPageStyled";

const VehiclesActivityCard = ({ data }) => {
  return (
    <CardContainer style={{ display: "flex" }}>
      <img src={data.icon} alt="" height="100px" width="100px" />
      <SelfContainer>
        <HeaderName FontSize="20px" FontWeight="400">
          {data.name}
        </HeaderName>
        <HeaderName FontSize="24px">{data.total}</HeaderName>
      </SelfContainer>
    </CardContainer>
  );
};

export default VehiclesActivityCard;
