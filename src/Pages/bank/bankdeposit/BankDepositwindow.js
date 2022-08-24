import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SaleSummary from "../../../components/sales/SaleSummary";
import SelectCustomer from "../../../components/sales/sales/SelectCustomer";
import AddItems from "../../../components/sales/sales/AddItems";
import PaymentMethod from "../../../components/sales/sales/PaymentMethod";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../../sale/SaleStyled";
import AccountDetails from "../../../components/bank/bankdeposit/AccountDetails";

const BankDepositwindow = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/bank/depositinvoice");
  };

  return (
    <>
      <PlainText2>Bank Deposit Form</PlainText2>
      <ButtonGroupContainer Possition="end" Shadow="none" Background="none">
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Invoice Search" Width="250px" />
          <Button>Export</Button>
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>
      <SelectCustomer />
      <AccountDetails />
      <CardContainer>
        <HeaderName>Items Summary</HeaderName>
        <AddItems />
      </CardContainer>

      <CardContainer>
        <HeaderName>Sales Summary</HeaderName>
        <Row xs={1} md={2}>
          <Col>
            <TextAriea rows={4} placeholder="Details..." />
            <PaymentMethod />
          </Col>
          <Col>
            <SaleSummary />
          </Col>
        </Row>

        <ContainerPosition Possition="end">
          <Button onClick={() => handleSubmit()}>Save</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default BankDepositwindow;
