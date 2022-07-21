import React from "react";
import SaleWindowTable from "../../components/sales/SaleWindowTable";
import { ButtonGroupContainer, Button } from "../landingPage/LandingPageStyled";
import { PlainText2 } from "./SaleStyled";
import { NavLink } from "react-router-dom";

const SaleWindow = () => {
  return (
    <div>
      <PlainText2>Sale Window</PlainText2>
      <ButtonGroupContainer Padding="17px" BorderRadius="8px" Gap="6px">
        {Array.from({ length: 10 }).map((_, idx) => (
          <NavLink to="/dashboard/addaccount" key={idx}>
            <Button>New Sale</Button>
          </NavLink>
        ))}
      </ButtonGroupContainer>
      <SaleWindowTable />
    </div>
  );
};

export default SaleWindow;
