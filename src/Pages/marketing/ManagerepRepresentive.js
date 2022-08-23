import React from 'react';
import ManageRepresentiveFrom from '../../components/marketing/ManageRepresentiveFrom';
import { Button, ButtonGroupContainer, CardContainer, ContainerPosition, Input } from '../landingPage/LandingPageStyled';
import { PlainText2 } from '../sale/SaleStyled';
import { NavLink } from "react-router-dom";

const ManagerepRepresentive = () => {
    return (
        <>
        <PlainText2>Manage Representative Window</PlainText2>
        <ButtonGroupContainer Possition="end" Shadow="none" Background="none">
        <ContainerPosition Gap="10px">
        <NavLink to="/message/testlink">
        <Button >Add New</Button>
        </NavLink>
         
          <Input type="search" placeholder="Search" Width="250px" />
        </ContainerPosition>
      </ButtonGroupContainer>

        <CardContainer>
            <ManageRepresentiveFrom/>
        </CardContainer>
            
        </>
    );
};

export default ManagerepRepresentive;