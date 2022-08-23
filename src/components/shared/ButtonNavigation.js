import React from "react";
import {
  Button,
  ButtonGroupContainer,
} from "../../Pages/landingPage/LandingPageStyled";

const ButtonNavigation = ({ navValue, data, setData }) => {
  return (
    <ButtonGroupContainer
      Gap="10px"
      Padding="5px 0px"
      Shadow="none"
      Background="none"
    >
      {navValue.map((value, idx) => (
        <Button
          key={idx}
          style={{
            color: data === value && "white",
            background: data === value && "#1B253F",
            marginLeft: value === "Print" && "auto",
          }}
          onClick={() => setData(value)}
        >
          {value}
        </Button>
      ))}
    </ButtonGroupContainer>
  );
};

export default ButtonNavigation;
