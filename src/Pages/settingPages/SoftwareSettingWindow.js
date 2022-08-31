import React, { useState } from "react";
import SettingWindowPages from "../../components/settingComponents/SettingWindowPages";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";

const SoftwareSettingWindow = () => {
  const listData = [
    "Common",
    "Home",
    "Sale",
    "Product",
    "Purchase",
    "Inventory",
    "Report",
    "Account",
    "Bank",
    "Human Resource",
    "Income",
    "Weight Scale",
  ];
  const [select, setSelect] = useState(listData[0]);
  const handleAction = (id, name) => {
    console.log(id, name);
  };
  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button>Add Field</Button>
        <Input type="search" placeholder="Invoice Search" Width="250px" />
        <Select
          Width="250px"
          style={{ marginLeft: "auto" }}
          onChange={(e) => setSelect(e.target.value)}
        >
          {listData.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
      </ButtonGroupContainer>

      <SettingWindowPages HeadName={select} handleAction={handleAction} />
    </>
  );
};

export default SoftwareSettingWindow;
