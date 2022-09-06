import React from "react";

import ItemDetails from "../../../components/sales/ItemDetails";
import {
  ContainerPosition,
  HeaderName,
  InvoiceBody,
  PlainText,
  TextAriea,
} from "../../landingPage/LandingPageStyled";

import ChallanReceiver from "../../../components/sales/challan/ChallanReceiver";
import ChallanVehicleDetails from "../../../components/sales/challan/ChallanVehicleDetails";
import VehicleRentDetails from "../../../components/sales/challan/VehicleRentDetails";
import InvoiceSign from "../../../components/sales/challan/InvoiceSign";
import InvoiceFormat from "../../../components/invoice/InvoiceFormat";
import InvoiceBarcode from "../../../components/invoice/InvoiceBarcode";

const ChallanInvoice3 = () => {
  return (
    <InvoiceFormat>
      <InvoiceBarcode invoiceName="Invoice" copyName="Challan 3" />
      <InvoiceBody>
        

        <ContainerPosition Possition="space-between">
          <div>
            <PlainText Color="red">Main Account</PlainText>
            <ChallanReceiver />
          </div>
          <div>
            <PlainText Color="red">To/Receiver</PlainText>
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
    </InvoiceFormat>
  );
};

export default ChallanInvoice3;
