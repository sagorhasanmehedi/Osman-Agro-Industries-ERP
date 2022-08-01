import React, { useState } from "react";
import {
  Button,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import Challan from "./Challan";

const ChallanInvoice = () => {
  const [data, setData] = useState("Challan 1");
  return (
    <>
      <ButtonGroupContainer Possition="space-between">
        <Button>Vehicle Challan</Button>
        <Button
          style={{
            color: data === "Challan 1" && "black",
            background: data === "Challan 1" && "gray",
          }}
          onClick={() => setData("Challan 1")}
        >
          Challan 1
        </Button>
        <Button
          style={{
            color: data === "Challan 2" && "black",
            background: data === "Challan 2" && "gray",
          }}
          onClick={() => setData("Challan 2")}
        >
          Challan 2
        </Button>
      </ButtonGroupContainer>
      {data === "Challan 1" && <Challan />}
      {data === "Challan 2" && <Challan />}
    </>
  );
};

export default ChallanInvoice;
