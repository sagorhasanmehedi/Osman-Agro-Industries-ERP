import React, { useState } from "react";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";
import {
  ButtonGroup,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import DeliveryCopy from "./DeliveryCopy";
import GatePassCopy from "./GatePassCopy";

const DeliveryInvoice = () => {
  const navValue = ["Delivery Copy", "Gate Pass Copy"];
  const [data, setData] = useState("Delivery Copy");

  return (
    <>
      <div style={{ width: "840px", margin: "auto", marginTop: "40px" }}>
        <SharedButtonNavigation
          navValue={navValue}
          data={data}
          setData={setData}
        />
      </div>

      {data === "Delivery Copy" && <DeliveryCopy />}
      {data === "Gate Pass Copy" && <GatePassCopy />}
    </>
  );
};

export default DeliveryInvoice;
