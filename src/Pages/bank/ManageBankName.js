import React, { useState } from "react";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
} from "../landingPage/LandingPageStyled";
import { NavLink } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";
import ManageBankNameForm from "../../components/bank/ManageBankNameForm";
import ProductNameList from "../../components/productComponets/ProductNameList";
import AddProductName from "../../components/productComponets/AddProductName";

const ManageBankName = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);
  const [condition, setCondition] = useState(false);

  const handleSubmit = () => { setCondition(false)};
  const handleUpdate = () => {};

  return (
    <>
      <PlainText2>Manage Bank Name</PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
        <Button onClick={() => setCondition(true)}>Add Bank</Button>
        <ContainerPosition Gap="10px">
          <Input type="search" placeholder="Search" Width="250px" />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>

      {condition && (
        <AddProductName
          name="Bank Name"
          setName={setData}
          handleSubmit={handleSubmit}
          
        />
      )}

      <ProductNameList
        name="Bank Name"
        Datas={datas}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default ManageBankName;
