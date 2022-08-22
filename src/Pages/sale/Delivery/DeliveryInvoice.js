import React, { useState } from "react";
import SharedButtonNavigation2 from "../../../components/shared/SharedButtonNavigation2";
import { InvoiceNav } from "../../landingPage/LandingPageStyled";
import DeliveryCopy from "./DeliveryCopy";
import GatePassCopy from "./GatePassCopy";

const DeliveryInvoice = () => {
  const navValue = ["Delivery Copy", "Gate Pass Copy"];
  const [data, setData] = useState("Delivery Copy");

  return (
    <>
      <InvoiceNav>
        <SharedButtonNavigation2
          navValue={navValue}
          data={data}
          setData={setData}
        />
      </InvoiceNav>

      {data === "Delivery Copy" && <DeliveryCopy />}
      {data === "Gate Pass Copy" && <GatePassCopy />}
    </>
  );
};

export default DeliveryInvoice;
