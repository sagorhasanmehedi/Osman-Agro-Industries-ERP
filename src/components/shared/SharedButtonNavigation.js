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
            color: data === value && "black",
            background: data === value && "gray",
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
