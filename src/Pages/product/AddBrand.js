import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddBrand = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Brand"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Brand" Datas={datas} />
    </>
  );
};

export default AddBrand;
