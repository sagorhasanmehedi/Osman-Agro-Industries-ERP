import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import ChallanInvoice1 from "./ChallanInvoice1";
import ChallanInvoice2 from "./ChallanInvoice2";
import ChallanInvoice3 from "./ChallanInvoice3";

const ChallanInvoiceContainer = () => {
  const [data, setData] = useState("Challan 1");
  return (
    <>
      <ButtonGroupContainer Padding="0px" BorderRadius="none">
        <ButtonGroup
          style={{
            color: data === "Challan 1" && "black",
            background: data === "Challan 1" && "gray",
          }}
          onClick={() => setData("Challan 1")}
        >
          Challan 1
        </ButtonGroup>
        <ButtonGroup
          style={{
            color: data === "Challan 2" && "black",
            background: data === "Challan 2" && "gray",
          }}
          onClick={() => setData("Challan 2")}
        >
          Challan 2
        </ButtonGroup>
        <ButtonGroup
          style={{
            color: data === "Challan 3" && "black",
            background: data === "Challan 3" && "gray",
          }}
          onClick={() => setData("Challan 3")}
        >
          Challan 3
        </ButtonGroup>
      </ButtonGroupContainer>
      {data === "Challan 1" && <ChallanInvoice1 />}
      {data === "Challan 2" && <ChallanInvoice2 />}
      {data === "Challan 3" && <ChallanInvoice3 />}
    </>
  );
};

export default ChallanInvoiceContainer;
