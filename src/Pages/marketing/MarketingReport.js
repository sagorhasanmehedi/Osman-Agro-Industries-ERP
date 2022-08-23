import React from "react";
import MarketingReportForm from "../../components/marketing/MarketingReportForm";
import { NavLink } from "react-router-dom";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const MarketingReport = () => {
  return (
    <>
      <PlainText2>Marketing Report Window</PlainText2>
      <MarketingReportHeader />
      <CardContainer>
        <MarketingReportForm />
      </CardContainer>
    </>
  );
};

export default MarketingReport;

const MarketingReportHeader = () => {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Lavel>Start Date</Lavel>
      <Input type="Date" Width="150px" />
      <Lavel>End Date</Lavel>
      <Input type="Date" Width="150px" />
      <Button>Search</Button>

      <Select style={{ margin: "auto" }} Width="150px">
        <option>Type</option>
        <option>Sale</option>
        <option>Purchases</option>
        <option>Daily</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </Select>

      <Input type="search" Width="250px" placeholder="Search" />

      <Button Background="#1B253F">Export</Button>
      <Button Background="#1B253F">Print</Button>
    </ButtonGroupContainer>
  );
};
