import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddUnite = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Unit"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Unit" Datas={datas} />
    </>
  );
};
export default AddUnite;
