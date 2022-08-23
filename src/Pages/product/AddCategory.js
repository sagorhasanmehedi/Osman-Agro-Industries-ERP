import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddCategory = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Categori"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Categori" Datas={datas} />
    </>
  );
};

export default AddCategory;
