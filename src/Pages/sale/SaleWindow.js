import React from "react";
import SaleWindowTable from "../../components/sales/SaleWindowTable";
import { Button } from "../loginPage/LoginStyled";
import { ButtonGroupContainer, PlainText2 } from "./SaleStyled";

const SaleWindow = () => {
  return (
    <div>
      <PlainText2>Sale Window</PlainText2>
      <ButtonGroupContainer>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Button
            Padding="10px"
            BorderRadius="8px"
            FontSize="16px"
            FontWeight="600"
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            Start Free Trial
          </Button>
        ))}
      </ButtonGroupContainer>
      <SaleWindowTable />
    </div>
  );
};

export default SaleWindow;
