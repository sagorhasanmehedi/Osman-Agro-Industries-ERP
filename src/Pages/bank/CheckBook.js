import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import OwnerCheckCheckBookPartyForm from "../../components/bank/OwnerCheckBookForm";
import PartyCheckBookForm from "../../components/bank/PartyCheckBookForm";
import SharedButtonNavigation2 from "../../components/shared/SharedButtonNavigation2";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const CheckBook = () => {
  const usenavigation = useNavigate();
  const [data, setData] = useState("OwnerCheck & Check Book");
  const navValue = ["OwnerCheck & Check Book", "Party Check Book"];
  return (
    <>
      <PlainText2>OwnerCheck & Party Check Book Window</PlainText2>
      <ButtonGroupContainer
        Possition="space-between"
        Shadow="none"
        Background="none"
      >
        <NavLink to="/message/testlink">
          <Button>Add Check Book </Button>
        </NavLink>
        <ContainerPosition Gap="10px">
          <Input
            type="search"
            placeholder="Type Account / Check No"
            Width="250px"
          />
          <Button>Print</Button>
        </ContainerPosition>
      </ButtonGroupContainer>
      <SharedButtonNavigation2
        navValue={navValue}
        data={data}
        setData={setData}
      />
      <CardContainer>
        {data === "OwnerCheck & Check Book" && <OwnerCheckCheckBookPartyForm />}
        {data === "Party Check Book" && <PartyCheckBookForm />}
      </CardContainer>
    </>
  );
};

export default CheckBook;
