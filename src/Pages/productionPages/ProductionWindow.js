import React from "react";
import { NavLink } from "react-router-dom";
import ProductionListTable from "../../components/productionComponents/ProductionListTable";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const ProductionWindow = () => {
  return (
    <>
      <PlainText2>Production Window</PlainText2>
      <FilterSection />
      <ProductionListTable />
    </>
  );
};

export default ProductionWindow;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px">
      <NavLink to="/production/addproduction">
        <Button>Add Production Order</Button>
      </NavLink>
      <Input
        type="date"
        placeholder="Invoice Search"
        Width="150px"
        style={{ marginLeft: "auto" }}
      />
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Input
        type="text"
        placeholder="Barcode type and id search"
        Width="250px"
      />

      <Select Width="150px">
        <option>type</option>
        <option>type</option>
        <option>type</option>
        <option>type</option>
      </Select>
      <Button>Search</Button>
    </ButtonGroupContainer>
  );
}
