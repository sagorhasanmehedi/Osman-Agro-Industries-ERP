import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  Input,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const ManageProduct = () => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/product/addproduct");
  };
  return (
    <>
      <PlainText2>Manage Product Window</PlainText2>
      <ButtonGroupContainer Gap="10px">
        <Button Padding="10px 15px" onClick={addProduct}>
          Add Product
        </Button>
        <Input
          type="search"
          placeholder="Search"
          style={{ width: "400px", marginRight: "auto" }}
        />
        <Button Padding="10px 15px">Export</Button>
        <Button Padding="10px 15px">Print</Button>
      </ButtonGroupContainer>
      <CardContainer>
        <ManageProductTable />
      </CardContainer>
    </>
  );
};

export default ManageProduct;

function ManageProductTable() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white" }}
    >
      <thead>
        <tr style={{ borderWidth: 0 }}>
          <th>SL</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Model</th>
          <th>Category</th>
          <th>Lot/Gallery</th>
          <th>Supplier Name</th>
          <th>Supplier Price</th>
          <th>Our Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((value, idx) => (
          <tr key={idx}>
            <td>SL</td>
            <td>Product Name</td>
            <td>Image</td>
            <td>Model</td>
            <td>Category</td>
            <td>Lot/Gallery</td>
            <td>Supplier Name</td>
            <td>Supplier Price</td>
            <td>Our Price</td>
            <td>delete, Qr-code, Barcode, Edite</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
