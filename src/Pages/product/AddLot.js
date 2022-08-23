import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const AddLot = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Lot / Gallery"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Lot / Gallery" Datas={datas} />
    </>
  );
};
export default AddLot;
