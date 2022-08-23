import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddAccountType = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Account Type"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Account Type" Datas={datas} />
    </>
  );
};

export default AddAccountType;
