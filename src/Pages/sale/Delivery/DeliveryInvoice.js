import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import DeliveryCopy from "./DeliveryCopy";
import GatePassCopy from "./GatePassCopy";

const DeliveryInvoice = () => {
  const [data, setData] = useState("Delivery Copy");
  return (
    <>
      <ButtonGroupContainer Padding="0px" BorderRadius="none">
        <ButtonGroup
          style={{
            color: data === "Delivery Copy" && "black",
            background: data === "Delivery Copy" && "gray",
          }}
          onClick={() => setData("Delivery Copy")}
        >
          Delivery Copy
        </ButtonGroup>
        <ButtonGroup
          style={{
            color: data === "Gate Pass Copy" && "black",
            background: data === "Gate Pass Copy" && "gray",
          }}
          onClick={() => setData("Gate Pass Copy")}
        >
          Gate Pass Copy
        </ButtonGroup>
      </ButtonGroupContainer>

      {data === "Delivery Copy" && <DeliveryCopy />}
      {data === "Gate Pass Copy" && <GatePassCopy />}
    </>
  );
};

export default DeliveryInvoice;
