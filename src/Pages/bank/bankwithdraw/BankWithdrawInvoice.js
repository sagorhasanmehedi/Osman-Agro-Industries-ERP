import React, { useState } from 'react';
import DipositCustomarInvoice from '../../../components/bank/bankdeposit/DipositCustomarInvoice';
import DipositOfficerInvoice from '../../../components/bank/bankdeposit/DipositOfficerInvoice';
import WithdrawCustomerInvoice from '../../../components/bank/bankwithdraw/WithdrawCustomerInvoice';
import WithdrawOfficeInvoice from '../../../components/bank/bankwithdraw/WithdrawOfficeInvoice';
import SharedButtonNavigation2 from '../../../components/shared/SharedButtonNavigation2';
import { Button, ButtonGroupContainer, ContainerPosition, InvoiceNav } from '../../landingPage/LandingPageStyled';
import { PlainText2 } from '../../sale/SaleStyled';

const BankWithdrawInvoice = () => {
  const navValue = ["OfficeInvoice", "CustomerInvoice"];
  const [data, setData] = useState("OfficeInvoice");

  return (
    <>
      <PlainText2>Bank Withdraw Invoice</PlainText2>
      <ButtonGroupContainer
        Gap="6px"
        Shadow="none"
        Background="none"
        Possition="space-between"
      >
        <ContainerPosition Gap="10px">
          <Button>Update Withdraw</Button>
        </ContainerPosition>

        <ContainerPosition Gap="10px">
          <Button>Export</Button>
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>

      <>
        <InvoiceNav>
          <SharedButtonNavigation2
            navValue={navValue}
            data={data}
            setData={setData}
          />
        </InvoiceNav>

        {data === "OfficeInvoice" && <WithdrawOfficeInvoice />}
        {data === "CustomerInvoice" && <WithdrawCustomerInvoice/>}
      </>
    </>
  );
};

export default BankWithdrawInvoice;