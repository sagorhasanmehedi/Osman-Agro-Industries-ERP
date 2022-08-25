import React from "react";
import SalaryGenerateForm from "../../components/payroll/SalaryGenerateForm";
import SalaryShetForm from "../../components/payroll/SalaryShetForm";
import {
  Button,
  ButtonGroupContainer,
  ContainerPosition,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const SalarySheet = () => {
  return (
    <>
      <PlainText2>Manage Salary Generate</PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
        <ContainerPosition Gap="13px">
          <Select name="Month" Width="150px">
            <option>Month</option>
            <option>Month</option>
            <option>Month</option>
          </Select>
          <Select name="Month" Width="150px">
            <option>Year</option>
            <option>Year</option>
            <option>Year</option>
          </Select>
          <Select name="Division" Width="150px">
            <option>Division</option>
            <option>Division</option>
            <option>Division</option>
          </Select>
          <Button>Search</Button>
        </ContainerPosition>

        <ContainerPosition>
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>
      <SalaryShetForm/>
    </>
  );
};

export default SalarySheet;
