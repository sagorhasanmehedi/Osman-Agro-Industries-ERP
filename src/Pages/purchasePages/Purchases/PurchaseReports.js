import React, { useState } from "react";
import SaleReportHeader from "../../../components/sales/sales/SaleReportHeader";
import SaleReportTable from "../../../components/sales/sales/SaleReportTable";
import SaleTotalReport from "../../../components/sales/sales/SaleTotalReport";
import { CardContainer } from "../../landingPage/LandingPageStyled";

const PurchaseReports = () => {
  return (
    <>
      <SaleReportHeader />
      <CardContainer>
        <SaleTotalReport />
        <SaleReportTable />
      </CardContainer>
    </>
  );
};

export default PurchaseReports;
