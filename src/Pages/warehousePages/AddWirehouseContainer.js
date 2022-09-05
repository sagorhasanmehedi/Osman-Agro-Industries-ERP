import React, { useState } from "react";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import AddWirehouse from "./AddWirehouse";
import WireHouseType from "./WireHouseType";

const AddWirehouseContainer = () => {
  const [data, setData] = useState("Warehouse Window");
  const navValue = ["Warehouse Window", "Type Window"];
  return (
    <div>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />

      {data === "Type Window" ? <WireHouseType /> : <AddWirehouse />}
    </div>
  );
};
export default AddWirehouseContainer;
