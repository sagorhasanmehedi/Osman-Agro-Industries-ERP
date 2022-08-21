import React, { useState } from "react";
import SaleReportHeader from "../../../components/sales/sales/SaleReportHeader";
import SaleReportTable from "../../../components/sales/sales/SaleReportTable";
import SaleTotalReport from "../../../components/sales/sales/SaleTotalReport";
import { CardContainer } from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";

const SaleReports = () => {
  return (
    <>
     <PlainText2> Sale Report Window</PlainText2>
      <SaleReportHeader />
      <CardContainer>
        <SaleTotalReport />
        <SaleReportTable />
      </CardContainer>
    </>
  );
};

export default SaleReports;
