import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import CustomerDetailsForm from "../../components/sales/CustomerDetailsForm";
import ItemDetailsForm from "../../components/sales/ItemDetailsForm";
import {
  Button,
  CardContainer,
  HeaderName,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "./SaleStyled";

const NewSale = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/dashboard/saleInvoice");
  };
  return (
    <>
      <PlainText2>New Sale</PlainText2>
      <CardContainer>
        <CustomerDetailsForm />
        <HeaderName>Items Summary</HeaderName>
        <ItemDetailsForm />
        <Row>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Button Padding="10px 40px" onClick={() => handleSubmit()}>
              Save
            </Button>
          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

export default NewSale;
