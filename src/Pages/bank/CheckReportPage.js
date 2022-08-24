import React from "react";
import CheckReportForm from "../../components/bank/CheckReportForm";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  Input,
  Lavel,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const CheckReportPage = () => {
  return (
    <>
      <PlainText2>Check Report Page</PlainText2>
      <MarketingReportHeader />
      <CardContainer>
        <CheckReportForm/>
      </CardContainer>
    </>
  );
};

export default CheckReportPage;

const MarketingReportHeader = () => {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Lavel>Start Date</Lavel>
      <Input type="Date" Width="150px" />
      <Lavel>End Date</Lavel>
      <Input type="Date" Width="150px" />
      <Button>Search</Button>

      <Select style={{ margin: "auto" }} Width="150px">
        <option>Check Type</option>
        <option>Receipt</option>
        <option>Issued</option>
        <option>Withdrawal</option>
        
      </Select>


      
 
 
 

      <Input type="search" Width="250px" placeholder="Search" />

      <Button Background="#1B253F">Search</Button>
      <Button Background="#1B253F">Print</Button>
    </ButtonGroupContainer>
  );
};
