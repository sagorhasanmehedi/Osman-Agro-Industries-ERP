import React from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
  Select,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";
import ManageBankAccountForm from "../../components/bank/ManageBankAccountForm";

const ManageBankAccount = () => {
  return (
    <>
      <PlainText2>Manage Bank Account Window</PlainText2>
      <MarketingReportHeader />

      <CardContainer>
        <ManageBankAccountForm/>
      </CardContainer>
    </>
  );
};

export default ManageBankAccount;

const MarketingReportHeader = () => {
  return (
    <ButtonGroupContainer
      Gap="6px"
      Shadow="none"
      Background="none"
      Possition="space-between"
    >
        <NavLink to="/Bank/addaccount">
        <Button>Add New Account</Button>
        </NavLink>
      

      <ContainerPosition Gap="10px">
        <Select Width="150px">
          <option>City</option>
          <option>City</option>
          <option>City</option>
        </Select>
        <Select Width="150px">
          <option>District</option>
          <option>District</option>
          <option>District</option>
        </Select>
        <Select Width="150px">
          <option>Thana</option>
          <option>Thana</option>
          <option>Thana</option>
        </Select>
      </ContainerPosition>

      <ContainerPosition Gap="10px">
        <Input type="search" Width="250px" placeholder="Search" />
        <Button>Search</Button>
      </ContainerPosition>
    </ButtonGroupContainer>
  );
};
