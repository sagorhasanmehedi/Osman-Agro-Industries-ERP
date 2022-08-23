import React from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";
import ManageBankNameForm from "../../components/bank/ManageBankNameForm";

const ManageBankName = () => {
  return (
    <>
      <PlainText2>Manage Bank Name Window</PlainText2>
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
        <ManageBankNameForm/>
      </CardContainer>
    </>
  );
};

export default ManageBankName;
