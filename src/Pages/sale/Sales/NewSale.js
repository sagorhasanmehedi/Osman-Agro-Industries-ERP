import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SaleSummary from "../../../components/sales/SaleSummary";
import SelectCustomer from "../../../components/sales/sales/SelectCustomer";
import {
  Button,
  CardContainer,
  ContainerPosition,
  HeaderName,
  TextAriea,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../SaleStyled";
import CustomerDetailsForm from "../../../components/sales/sales/CustomerDetailsForm";
import AddItems from "../../../components/sales/sales/AddItems";
import PaymentMethod from "../../../components/sales/sales/PaymentMethod";

const NewSale = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/dashboard/saleInvoice");
  };

  return (
    <>
      <PlainText2>New Sale</PlainText2>
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
          <Button Padding="10px 40px" onClick={() => handleSubmit()}>
            Save
          </Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default NewSale;
