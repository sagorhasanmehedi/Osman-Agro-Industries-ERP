import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonNavigation from "../../components/shared/ButtonNavigation";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";
import { PlainText2 } from "../sale/SaleStyled";
import WeightScaleInvoiceOfficeCopy from "./WeightScaleInvoiceOfficeCopy";

const WeightScaleInvoiceContainer = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const navValue = ["Pay Vehicle Rent", "Print"];
  const [data2, setData2] = useState("Office Invoice");
  const navValue2 = ["Office Invoice"];

  if (data === "Pay Vehicle Rent") {
    navigation("/dashboard/addDelivery");
  }
  return (
    <>
      <PlainText2>Weight Scale Invoice</PlainText2>
      <ButtonNavigation navValue={navValue} data={data} setData={setData} />
      <SharedButtonNavigation2
        navValue={navValue2}
        data={data2}
        setData={setData2}
      />
      {data2 === "Office Invoice" && <WeightScaleInvoiceOfficeCopy />}
    </>
  );
};

export default WeightScaleInvoiceContainer;
