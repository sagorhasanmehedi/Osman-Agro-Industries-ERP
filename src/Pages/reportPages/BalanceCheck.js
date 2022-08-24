import React, { useState } from "react";
import BalanceCheckList from "../../components/ReportComponents/BalanceCheckList";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import {
  ButtonGroupContainer,
  Input,
  Select,
  Button,
  CardContainer,
} from "../landingPage/LandingPageStyled";

const BalanceCheck = () => {
  const [data, setData] = useState("Customer & Supplier Account");
  const navValue = [
    "Customer & Supplier Account",
    "Employee Account",
    "Bank Account",
    "Income-Expense Account",
  ];
  return (
    <>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      <FilterSection />

      <BalanceCheckList />
    </>
  );
};

export default BalanceCheck;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Input type="text" placeholder=" search" Width="250px" />

      <Select Width="150px">
        <option>city</option>
        <option>city</option>
        <option>city</option>
        <option>city</option>
      </Select>
      <Select Width="150px">
        <option>district</option>
        <option>district</option>
        <option>district</option>
        <option>district</option>
      </Select>
      <Select Width="150px">
        <option>thana</option>
        <option>thana</option>
        <option>thana</option>
        <option>thana</option>
      </Select>
      <Button>Search</Button>
      <Button style={{ marginLeft: "auto" }} Background="#1B253F">
        Print
      </Button>
    </ButtonGroupContainer>
  );
}
