import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const Division = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};
  return (
    <>
      <AddProductName
        name="Division"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Division" Datas={datas} />
    </>
  );
};

export default Division;
