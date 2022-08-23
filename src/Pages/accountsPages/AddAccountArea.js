import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddAccountArea = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Account Categori"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Account Categori" Datas={datas} />
    </>
  );
};

export default AddAccountArea;
