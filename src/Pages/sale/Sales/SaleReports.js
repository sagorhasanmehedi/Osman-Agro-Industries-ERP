import React from "react";
import SaleReportTable from "../../../components/sales/sales/SaleReportTable";
import SaleTotalReport from "../../../components/sales/sales/SaleTotalReport";

import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  Input,
  Lavel,
  Select,
} from "../../landingPage/LandingPageStyled";

import { PlainText2 } from "../SaleStyled";

const SaleReports = () => {
  return (
    <>
      <PlainText2>Sale Report Window</PlainText2>

      <SaleReportHeader />
      <CardContainer>
        <SaleTotalReport />
        <SaleReportTable />
      </CardContainer>
    </>
  );
};

export default SaleReports;

const SaleReportHeader = () => {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Select Width="150px">
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
        <option>Category</option>
      </Select>
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

      <Lavel>Start Date</Lavel>
      <Input type="Date" Width="150px" />
      <Lavel>End Date</Lavel>
      <Input type="Date" Width="150px" />
      <Button>Search</Button>
      <Input
        type="search"
        Width="250px"
        placeholder="Search"
        style={{ margin: "auto" }}
      />

      <Button Background="#1B253F">Export</Button>
      <Button Background="#1B253F">Print</Button>
    </ButtonGroupContainer>
  );
};
