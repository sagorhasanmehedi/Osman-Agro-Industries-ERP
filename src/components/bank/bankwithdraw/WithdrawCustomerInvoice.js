import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CardContainer,
  InvoiceBody,
  ButtonGroupContainer,
  ContainerPosition,
  HeaderName,
  PlainText,
  TextAriea,
} from "../../../Pages/landingPage/LandingPageStyled";
import InvoiceSign from "../../sales/challan/InvoiceSign";
import SaleInvoiceInfo from "../../sales/sales/SaleInvoiceInfo";
import SaleSummary from "../../sales/SaleSummary";
import BankInvoiceAcountDetails from "../bankdeposit/BankInvoiceAcountDetails";
import ReceivedMethod from "../bankdeposit/ReceivedMethod";
import InvoiceAcountInfoTable from "./InvoiceAcountInfoTable";
import InvoiceFooter from "../../../assets/InvoiceFooter.png";
import InvoiceHeader from "../../../assets/InvoiceHeader.png";

const WithdrawCustomerInvoice = () => {
  return (
    <CardContainer Width="840px" Padding="0px" style={{ margin: "auto" }}>
      <img src={InvoiceHeader} alt="" style={{ width: "100%" }} />
      <InvoiceBody>
        <ButtonGroupContainer Possition="space-between" Shadow="none">
          <PlainText Padding="10px 40px" Border="1px solid black">
            Withdraw Invoice
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            BarCode
          </PlainText>
          <PlainText Padding="10px 40px" Border="1px solid black">
            Customer Copy
          </PlainText>
        </ButtonGroupContainer>
        <ContainerPosition Possition="space-between">
          <BankInvoiceAcountDetails />
          <SaleInvoiceInfo />
        </ContainerPosition>
        <ReceivedMethod />
        <InvoiceAcountInfoTable />
        <HeaderName>Summary</HeaderName>
        <Row>
          <Col>
            <TextAriea rows="5" placeholder="Sale Details" />
            <TextAriea rows="4" placeholder="Last Created Details" />
          </Col>
          <Col>
            <SaleSummary />
          </Col>
        </Row>
      </InvoiceBody>

      <InvoiceSign />
      <img
        src={InvoiceFooter}
        alt=""
        style={{
          width: "100%",
        }}
      />
    </CardContainer>
  );
};

export default WithdrawCustomerInvoice;
