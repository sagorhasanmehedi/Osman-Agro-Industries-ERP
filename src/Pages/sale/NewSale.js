import React from "react";
import CustomerDetailsForm from "../../components/sales/CustomerDetailsForm";
import ItemDetailsForm from "../../components/sales/ItemDetailsForm";
import SaleSummary from "../../components/sales/SaleSummary";
import { PlainText2 } from "./SaleStyled";

const NewSale = () => {
  return (
    <>
      <PlainText2>New Sale</PlainText2>
      <CustomerDetailsForm />
      <PlainText2>Sales Summary</PlainText2>
      <ItemDetailsForm />
      <PlainText2>Sales Summary</PlainText2>
      <SaleSummary />
    </>
  );
};

export default NewSale;
