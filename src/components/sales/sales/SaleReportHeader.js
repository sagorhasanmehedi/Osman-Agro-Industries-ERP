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
        <Button>Search</Button>
        <Button style={{ marginLeft: "auto" }}>Export</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
    </>
  );
};

export default SaleReportHeader;
