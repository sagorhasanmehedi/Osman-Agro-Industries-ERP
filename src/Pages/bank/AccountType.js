import React from 'react';
import { PlainText2 } from '../sale/SaleStyled';
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import AcountTypeForm from '../../components/bank/AcountTypeForm';

const AccountType = () => {
    return (
        <>
      <PlainText2>Bank Account Type Window</PlainText2>


      <ButtonGroupContainer Possition="space-between" Shadow="none" Background="none">
        <NavLink to="/message/testlink">
          <Button>Add Bank</Button>
        </NavLink>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>

      <CardContainer>
       <AcountTypeForm/> 
      </CardContainer>
    </>
    );
};

export default AccountType;