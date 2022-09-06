import React from "react";
import AddItems from "../../components/sales/sales/AddItems";
import CustomerDetailsForm from "../../components/sales/sales/CustomerDetailsForm";
import PaymentMethod from "../../components/sales/sales/PaymentMethod";
import SelectCustomer from "../../components/sales/sales/SelectCustomer";
import SaleSummary from "../../components/sales/SaleSummary";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  TextAriea,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Income = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/incomeexpense/incomeinvoice");
  };

  return (
    <>
      <PlainText2>Income Form</PlainText2>

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

export default Income;