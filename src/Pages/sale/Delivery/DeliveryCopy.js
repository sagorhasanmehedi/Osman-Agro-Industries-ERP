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
import InvoiceFormat from "../../../components/invoice/InvoiceFormat";
import InvoiceBarcode from "../../../components/invoice/InvoiceBarcode";
const DeliveryCopy = () => {
  return (
    <InvoiceFormat>
      <InvoiceBarcode invoiceName="Invoice" copyName="Delivery Copy" />
      <InvoiceBody>
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
    </InvoiceFormat>
  );
};

export default DeliveryCopy;

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
