import React from "react";
import { PlainText2 } from "../sale/SaleStyled";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import ManageBankBranchForm from "../../components/bank/ManageBankBranchForm";

const ManageBankBranch = () => {
  return (
    <>
      <PlainText2>Manage Bank Branch Window</PlainText2>
      <ButtonGroupContainer Possition="space-between" Shadow="none" Background="none">
        <NavLink to="/message/testlink">
          <Button>Add Beranch</Button>
        </NavLink>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>
      <CardContainer>
        <ManageBankBranchForm/>
      </CardContainer>
    </>
  );
};

export default ManageBankBranch;
