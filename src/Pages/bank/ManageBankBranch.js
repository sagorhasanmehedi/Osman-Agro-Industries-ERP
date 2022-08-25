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
import ManageBankBranchForm from "../../components/bank/ManageBankBranchForm";
import AddProductName from "../../components/productComponets/AddProductName";

const ManageBankBranch = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);
  const [condition, setCondition] = useState(false);

  const handleSubmit = () => {
    setCondition(false);
  };

  return (
    <>
      <PlainText2>Manage Bank Branch</PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
        <Button onClick={() => setCondition(true)}>Add Beranch</Button>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>
      {condition && (
        <AddProductName
          name="Bank Branch"
          setName={setData}
          handleSubmit={handleSubmit}
        />
      )}
      <CardContainer>
      <HeaderName>Bank Branch List</HeaderName>
        <ManageBankBranchForm />
      </CardContainer>
    </>
  );
};

export default ManageBankBranch;
