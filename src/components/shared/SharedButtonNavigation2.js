import React from "react";
import {
  ButtonGroupContainer,
  ButtonGroup,
} from "../../Pages/landingPage/LandingPageStyled";

const SharedButtonNavigation2 = ({ navValue, data, setData }) => {
  return (
    <ButtonGroupContainer Padding="0px" BorderRadius="0px" Margin="0 0 60px 0">
      {navValue.map((value, idx) => (
        <ButtonGroup
          key={idx}
          style={{
            borderBottom: data === value && "2px solid #54D487",
            fontWeight: data === value && "600",
            color: data === value && "#54D487",
          }}
          onClick={() => setData(value)}
        >
          {value}
        </ButtonGroup>
      ))}
    </ButtonGroupContainer>
  );
};

export default SharedButtonNavigation2;
