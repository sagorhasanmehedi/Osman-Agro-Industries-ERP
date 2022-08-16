import React from "react";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../../../Pages/landingPage/LandingPageStyled";

const SaleReportHeader = () => {
  return (
    <>
      <ButtonGroupContainer Gap="10px">
        <Input type="Date" Width="150px" />
        <Input type="Date" Width="150px" />
        <Select Width="150px">
          <option>Month1</option>
          <option>Month1</option>
          <option>Month1</option>
          <option>Month1</option>
          <option>Month1</option>
          <option>Month1</option>
        </Select>
        <Select Width="150px">
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
        </Select>
        <Select Width="150px">
          <option>Category</option>
          <option>Category</option>
          <option>Category</option>
          <option>Category</option>
          <option>Category</option>
          <option>Category</option>
        </Select>
        <Button Padding="10px 20px">Search</Button>
        <Button Padding="10px 20px" style={{ marginLeft: "auto" }}>
          Export
        </Button>
        <Button Padding="10px 20px">Print</Button>
      </ButtonGroupContainer>
    </>
  );
};

export default SaleReportHeader;
