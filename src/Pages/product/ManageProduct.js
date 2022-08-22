import React from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
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
      <ButtonGroupContainer Gap="10px" Shadow="none" Background="none">
        <Button onClick={addProduct}>Add Product</Button>
        <Input
          type="search"
          placeholder="Search"
          style={{ width: "400px", marginRight: "auto" }}
        />
        <Button Background="#1B253F">Export</Button>
        <Button Background="#1B253F">Print</Button>
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
      <tbody>
        <tr className="tableHeader">
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
            <td>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    background: "#54D487",
                    border: "none",
                  }}
                >
                  View
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Add Delivery</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
