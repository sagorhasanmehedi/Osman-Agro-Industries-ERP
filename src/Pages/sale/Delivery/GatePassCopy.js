import React from "react";
import { Table } from "react-bootstrap";
import CustomerDetails from "../../../components/sales/sales/CustomerDetails";
import VehiclesDetails from "../../../components/sales/delivery/VehiclesDetails";
import {
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  InvoiceBody,
  PlainText,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import SaleInvoiceInfo from "../../../components/sales/sales/SaleInvoiceInfo";
import InvoiceHeader from "../../../assets/InvoiceHeader.png";
import InvoiceFooter from "../../../assets/InvoiceFooter.png";
import DeliveryItem from "../../../components/sales/delivery/DeliveryItem";
import InvoiceSign from "../../../components/sales/challan/InvoiceSign";
const GatePassCopy = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />
      <InvoiceBody>
        <ButtonGroupContainer Possition="space-between" Shadow="none">
          <PlainText Padding="10px 40px" Border="1px solid black">
            Invoice
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            BarCode
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            Gate Pass Copy
          </PlainText>
        </ButtonGroupContainer>
        <ContainerPosition Possition="space-between">
          <CustomerDetails />
          <SaleInvoiceInfo />
        </ContainerPosition>
        <VehiclesDetails />
        <GodownDetails />
        <DeliveryItem />
        <DeliveryDetails />
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

export default GatePassCopy;

function GodownDetails() {
  return (
    <>
      <HeaderName>Godown Details</HeaderName>
      <TextAriea rows="2" placeholder="Sale Details" />
    </>
  );
}

function DeliveryDetails() {
  return (
    <>
      <HeaderName>Delivery Details</HeaderName>
      <TextAriea rows="2" placeholder="delivery Details" />
    </>
  );
}
