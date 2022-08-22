import React from 'react';
import SendForm from '../../components/message/SendForm';
import { Button, ButtonGroupContainer, ContainerPosition, Input, Lavel } from '../landingPage/LandingPageStyled';
import { PlainText2 } from '../sale/SaleStyled';

const Send = () => {
    return (
        <>
      <PlainText2>Massage send Window </PlainText2>
      <ButtonGroupContainer Possition="space-between" Shadow="none" Background="none">
        <ContainerPosition Gap="10px">
          <Lavel>Start Date</Lavel>
          <Input type="date" placeholder="Invoice Search" Width="150px" />
          <Button>Search</Button>
        </ContainerPosition>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Account/sms Search" Width="250px" />
        </ContainerPosition>
      </ButtonGroupContainer>
      <SendForm/>
      
    </>
    );
};

export default Send;