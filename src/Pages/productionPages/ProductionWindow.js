import React from "react";
import { NavLink } from "react-router-dom";
import ProductionListTable from "../../components/productionComponents/ProductionListTable";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Lavel,
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
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <NavLink to="/production/addproduction">
        <Button>Add Production Order</Button>
      </NavLink>
      <Input
        type="text"
        placeholder="Barcode type and id search"
        Width="250px"
        style={{ marginRight: "auto" }}
      />
      <Lavel>Start Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Lavel>End Date</Lavel>
      <Input type="date" placeholder="Invoice Search" Width="150px" />

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
