import React from "react";
import {
  ButtonGroupContainer,
  ButtonGroup,
} from "../../Pages/landingPage/LandingPageStyled";

const SharedButtonNavigation = ({ navValue, data, setData }) => {
  return (
    <div>
      <ButtonGroupContainer>
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
    </div>
  );
};

export default SharedButtonNavigation;
