import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  ButtonGroupContainer,
  Button,
  Input,
  ContainerPosition,
  CardContainer,
  HeaderName,
  TextAriea,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { NavLink } from "react-router-dom";
import SelectCustomer from "../../components/sales/sales/SelectCustomer";
import CustomerDetailsForm from "../../components/sales/sales/CustomerDetailsForm";
import AddItems from "../../components/sales/sales/AddItems";
import PaymentMethod from "../../components/sales/sales/PaymentMethod";
import SaleSummary from "../../components/sales/SaleSummary";

const IncomeExpenseTransaction = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/incomeexpense/expenseinvoice");
  };

  return (
    <>
      <PlainText2>Income-Expense Transaction</PlainText2>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none" Margin="0 0 25px 0">
        <NavLink to="/dashboard/newSale">
          <Button>+ Income</Button>
        </NavLink>
        <NavLink to="#">
          <Button>- Expense</Button>
        </NavLink>

        <ContainerPosition
          Margin="0px auto"
          Possition="center"
          Gap="10px"
          style={{ margin: "auto" }}
        ></ContainerPosition>
        <Input
          type="search"
          placeholder="Invoice Search"
          Width="250px"
         Margin="0 5px"
        />
        <Button Background="#1B253F">Export</Button>
        <Button Background="#1B253F">Print</Button>
      </ButtonGroupContainer>

      <SelectCustomer />
      <CustomerDetailsForm />
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

export default IncomeExpenseTransaction;
