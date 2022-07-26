import React from "react";
import CustomerDetailsForm from "../../components/sales/CustomerDetailsForm";
import ItemDetailsForm from "../../components/sales/ItemDetailsForm";
import { PlainText2 } from "./SaleStyled";

const UpdateSale = () => {
    return (
        <>
            <PlainText2>Update Sale</PlainText2>
            <CustomerDetailsForm />
            <PlainText2>Sales Summary</PlainText2>
            <ItemDetailsForm />
        </>
    );
};

export default UpdateSale;