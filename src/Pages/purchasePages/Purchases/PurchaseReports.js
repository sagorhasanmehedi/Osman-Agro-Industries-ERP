import React, { useState } from "react";
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
import { PlainText2 } from "../../sale/SaleStyled";

const PurchaseReports = () => {
  return (
    <>
      <PlainText2>Purchase Report Window</PlainText2>
      <PurchaseReportHeader />
      <CardContainer>
        <SaleTotalReport />
        <SaleReportTable />
      </CardContainer>
    </>
  );
};

export default PurchaseReports;

const PurchaseReportHeader = () => {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Lavel>Start Date</Lavel>
      <Input type="Date" Width="150px" />
      <Lavel>End Date</Lavel>
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
  );
};
