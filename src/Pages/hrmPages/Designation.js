import React, { useState } from "react";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const Designation = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};
  return (
    <>
      <AddProductName
        name="Designation"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Designation" Datas={datas} />
    </>
  );
};

export default Designation;
