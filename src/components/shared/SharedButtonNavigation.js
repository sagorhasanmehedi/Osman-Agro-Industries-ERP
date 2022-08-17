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
            borderBottom: data === value && "3px solid #54D487",
            color: data === value && "black",
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
