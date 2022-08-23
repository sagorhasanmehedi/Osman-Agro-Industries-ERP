import React, { useState } from "react";

import { Table, Row, Col } from "react-bootstrap";
import AddProductName from "../../components/productComponets/AddProductName";
import ProductNameList from "../../components/productComponets/ProductNameList";

const ProductionType = () => {
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <>
      <AddProductName
        name="Production Type"
        setName={setData}
        handleSubmit={handleSubmit}
      />
      <ProductNameList name="Production Type" Datas={datas} />
    </>
  );
};

export default ProductionType;
