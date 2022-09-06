import React from "react";
import {
  CardContainer,
  HeaderName,
  SelfContainer,
} from "../../Pages/landingPage/LandingPageStyled";
import { FaCartArrowDown } from "react-icons/fa";

const DashBoardActivityCard = ({ data }) => {
  return (
    <CardContainer>
      <SelfContainer Possition="space-between" Direction="row">
        <HeaderName FontSize="20px" FontWeight="400">
          {data.name}
        </HeaderName>
        <span
          style={{
            padding: "7px 10px",
            borderRadius: "100%",
            background: "rgba(91, 130, 253, 0.25)",
            color: "#5B82FD",
          }}
        >
          {data.icon}
        </span>
      </SelfContainer>
      <HeaderName FontSize="36px" FontWeight="600">
        {data.money}
      </HeaderName>
    </CardContainer>
  );
};

export default DashBoardActivityCard;
