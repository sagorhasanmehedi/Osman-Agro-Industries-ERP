import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubSaleInvoice from '../../components/sales/SubSaleInvoice';
import ButtonNavigation from '../../components/shared/ButtonNavigation';
import SharedButtonNavigation from '../../components/shared/SharedButtonNavigation';
import { PlainText2 } from './SaleStyled';

const SaleInvoice = () => {
    const navigation = useNavigate();
    const [data, setData] = useState("");
    const navValue = [
        "Update Sale",
        "Add Delivery",
        "SMS Re-Send",
        "Export",
        "Print",
        "Report Issu",
    ];
    const [data2, setData2] = useState("Invoice");
    const navValue2 = [
        "Invoice",
        "Delivery",
        "Challan",
        "Transaction",
        " History",
        "Document",
    ];


    if (data === "Update Sale") {
        navigation("/dashboard/updateSale")
    }

    return (
        <>
            <PlainText2>Sale Invoice</PlainText2>
            <ButtonNavigation navValue={navValue} data={data} setData={setData} />
            <SharedButtonNavigation navValue={navValue2} data={data2} setData={setData2} />
            <SubSaleInvoice />
        </>
    );
};

export default SaleInvoice;