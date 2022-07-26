import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonGroupContainer } from '../../Pages/landingPage/LandingPageStyled';
import InvoiceCustomerCopy from './InvoiceCustomerCopy';
import InvoiceOfficeCopy from './InvoiceOfficeCopy';

const SubSaleInvoice = () => {
    const [data, setData] = useState("OfficeInvoice")
    return (
        <>
            <ButtonGroupContainer style={{ justifyContent: "space-between" }}>
                <Button>Sale Invoice</Button>
                <ButtonGroup>BarCode</ButtonGroup>
                <Button
                    style={{
                        color: data === "OfficeInvoice" && "black",
                        background: data === "OfficeInvoice" && "gray",
                    }}
                    onClick={() => setData("OfficeInvoice")}
                >
                    Office Copy
                </Button>
                <Button
                    style={{
                        color: data === "CustomerInvoice" && "black",
                        background: data === "CustomerInvoice" && "gray",
                    }}
                    onClick={() => setData("CustomerInvoice")}
                >
                    Customer Copy
                </Button>
            </ButtonGroupContainer>
            {data === "OfficeInvoice" && <InvoiceOfficeCopy />}
            {data === "CustomerInvoice" && <InvoiceCustomerCopy />}
        </>
    );
};

export default SubSaleInvoice;