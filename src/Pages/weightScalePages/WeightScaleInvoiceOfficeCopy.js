import React from "react";
import AccountInfoInvoice from "../../components/invoice/AccountInfoInvoice";
import InvoiceBarcode from "../../components/invoice/InvoiceBarcode";
import InvoiceFormat from "../../components/invoice/InvoiceFormat";
import VoucherInfoInvoice from "../../components/invoice/VoucherInfoInvoice";
import WeightDetailsInvoice from "../../components/weightScaleComponents/WeightDetailsInvoice";
import WeightScaleItemDetails from "../../components/weightScaleComponents/WeightScaleItemDetails";
import WeightScaleBillDetails from "../../components/weightScaleComponents/WeightScaleBillDetails";
import { ContainerPosition } from "../landingPage/LandingPageStyled";

const WeightScaleInvoiceOfficeCopy = () => {
  return (
    <InvoiceFormat>
      <InvoiceBarcode invoiceName="Scale Invoice" copyName="Office Copy" />
      <ContainerPosition Possition="space-between">
        <AccountInfoInvoice />
        <VoucherInfoInvoice />
      </ContainerPosition>
      <WeightDetailsInvoice />
      <WeightScaleItemDetails />
      <WeightScaleBillDetails />
    </InvoiceFormat>
  );
};

export default WeightScaleInvoiceOfficeCopy;
