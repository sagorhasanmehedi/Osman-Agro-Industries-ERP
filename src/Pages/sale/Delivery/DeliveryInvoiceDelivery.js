import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import DeliveryCopy from "./DeliveryCopy";
import GatePassCopy from "./GatePassCopy";

const DeliveryInvoiceDelivery = () => {
  const [data, setData] = useState("Delivery Copy");
  return (
    <>
      <ButtonGroupContainer style={{ justifyContent: "space-between" }}>
        <Button>Delivery Invoice</Button>
        <ButtonGroup>BarCode</ButtonGroup>
        <Button
          style={{
            color: data === "Delivery Copy" && "black",
            background: data === "Delivery Copy" && "gray",
          }}
          onClick={() => setData("Delivery Copy")}
        >
          Delivery Copy
        </Button>
        <Button
          style={{
            color: data === "Gate Pass Copy" && "black",
            background: data === "Gate Pass Copy" && "gray",
          }}
          onClick={() => setData("Gate Pass Copy")}
        >
          Gate Pass Copy
        </Button>
      </ButtonGroupContainer>
      {data === "Delivery Copy" && <DeliveryCopy />}
      {data === "Gate Pass Copy" && <GatePassCopy />}
    </>
  );
};

export default DeliveryInvoiceDelivery;
