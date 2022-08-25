import React, { useState } from "react";
import { PlainText2 } from "../sale/SaleStyled";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import AccountCatagoryForm from "../../components/bank/AccountCatagoryForm";
import AddProductName from "../../components/productComponets/AddProductName";

const AccountCategory = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);
  const [condition, setCondition] = useState(false);

  const handleSubmit = () => {
    setCondition(false);
  };


  return (
    <>
      <PlainText2>Bank Account Category </PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
          <Button  onClick={() => setCondition(true)}>Add Bank Category</Button>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>


      {condition && (
        <AddProductName
          name="Add Bank Account Category"
          setName={setData}
          handleSubmit={handleSubmit}
        />
      )}

      <CardContainer>
      <HeaderName>Account Category List</HeaderName>
        <AccountCatagoryForm />
      </CardContainer>
    </>
  );
};

export default AccountCategory;
