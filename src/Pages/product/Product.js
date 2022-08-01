import React from "react";
import AddProductForm from "../../components/productComponets/AddProductForm";
import { PlainText2 } from "../sale/SaleStyled";

const Product = () => {
  return (
    <>
      <PlainText2>Add Product</PlainText2>
      <AddProductForm />
    </>
  );
};

export default Product;
