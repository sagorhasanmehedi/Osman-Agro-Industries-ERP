import React, { useState } from "react";
import SharedButtonNavigation from "../../../components/shared/SharedButtonNavigation";
import {
  ButtonGroup,
  ButtonGroupContainer,
} from "../../landingPage/LandingPageStyled";
import ChallanInvoice1 from "./ChallanInvoice1";
import ChallanInvoice2 from "./ChallanInvoice2";
import ChallanInvoice3 from "./ChallanInvoice3";

const ChallanInvoiceContainer = () => {
  const navValue = ["Challan 1", "Challan 2", "Challan 3"];
  const [data, setData] = useState("Challan 1");

  return (
    <>
      <div style={{ width: "840px", margin: "auto", marginTop: "40px" }}>
        <SharedButtonNavigation
          navValue={navValue}
          data={data}
          setData={setData}
        />
      </div>
      {data === "Challan 1" && <ChallanInvoice1 />}
      {data === "Challan 2" && <ChallanInvoice2 />}
      {data === "Challan 3" && <ChallanInvoice3 />}
    </>
  );
};

export default ChallanInvoiceContainer;
