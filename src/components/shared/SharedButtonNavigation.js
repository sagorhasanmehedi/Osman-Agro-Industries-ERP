import React from "react";
import {
  ButtonGroupContainer,
  ButtonGroup,
} from "../../Pages/landingPage/LandingPageStyled";

const SharedButtonNavigation = ({ navValue, data, setData }) => {
  return (
    <ButtonGroupContainer Padding="0px" BorderRadius="0px">
      {navValue.map((value, idx) => (
        <ButtonGroup
          key={idx}
          style={{
            background: data === value ? "#54D487" : "rgba(84, 212, 135, 0.25)",
            color: data === value && "white",
            fontWeight: data === value && "600",
          }}
          onClick={() => setData(value)}
        >
          {value}
        </ButtonGroup>
      ))}
    </ButtonGroupContainer>
  );
};

export default SharedButtonNavigation;
