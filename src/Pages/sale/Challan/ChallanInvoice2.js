import React from "react";
import ItemDetails from "../../../components/sales/ItemDetails";
import {
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  InvoiceBody,
  PlainText,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import InvoiceHeader from "../../../assets/InvoiceHeader.png";
import InvoiceFooter from "../../../assets/InvoiceFooter.png";
import ChallanReceiver from "../../../components/sales/challan/ChallanReceiver";
import ChallanVehicleDetails from "../../../components/sales/challan/ChallanVehicleDetails";
import VehicleRentDetails from "../../../components/sales/challan/VehicleRentDetails";
import InvoiceSign from "../../../components/sales/challan/InvoiceSign";

const ChallanInvoice2 = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />
      <InvoiceBody>
        <ButtonGroupContainer Possition="space-between" Shadow="none">
          <PlainText Padding="10px 40px" Border="1px solid black">
            Invoice
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            Challan 1
          </PlainText>
        </ButtonGroupContainer>
        <ContainerPosition Possition="space-between">
          <div>
            <PlainText Color="red">Main Account</PlainText>
            <ChallanReceiver />
          </div>
          <div>
            <PlainText Color="red">Receiver</PlainText>
            <ChallanReceiver />
          </div>
        </ContainerPosition>

        <HeaderName>Item Details</HeaderName>
        <ItemDetails />
        <PlainText Color="red" Padding="0px 0px 10px 0px">
          Challan Notes
        </PlainText>
        <TextAriea rows={4} placeholder="details" />
        <ChallanVehicleDetails />
        <HeaderName>Vehicle rent Details</HeaderName>
        <VehicleRentDetails />
      </InvoiceBody>

      <InvoiceSign />
      <img
        src={InvoiceFooter}
        alt=""
        style={{
          width: "100%",
        }}
      />
    </CardContainer>
  );
};

export default ChallanInvoice2;
