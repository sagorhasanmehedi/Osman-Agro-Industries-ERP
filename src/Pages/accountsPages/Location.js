import React, { useState } from "react";
import CityLocation from "../../components/accounts/CityLocation";
import DistrictLocation from "../../components/accounts/DistrictLocation";
import ThanaLocation from "../../components/accounts/ThanaLocation";
import UnionLocation from "../../components/accounts/UnionLocation";
import SharedButtonNavigation from "../../components/shared/SharedButtonNavigation";
import { PlainText2 } from "../sale/SaleStyled";

const Location = () => {
  const [data, setData] = useState("City");
  const navValue = ["City", "District", "Thana", "Union"];
  return (
    <>
      <PlainText2>Location</PlainText2>
      <SharedButtonNavigation
        navValue={navValue}
        data={data}
        setData={setData}
      />
      {data === "City" && <CityLocation />}
      {data === "District" && <DistrictLocation />}
      {data === "Thana" && <ThanaLocation />}
      {data === "Union" && <UnionLocation />}
    </>
  );
};

export default Location;
