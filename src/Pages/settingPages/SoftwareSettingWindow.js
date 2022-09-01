import React, { useState } from "react";
import DynamicTextInput from "../../components/forms/DynamicTextInput";
import SingleFormContainer from "../../components/forms/SingleFormContainer";
import SettingWindowPages from "../../components/settingComponents/SettingWindowPages";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";

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

const SoftwareSettingWindow = () => {
  const [select, setSelect] = useState(listData[0]);
  const [addform, setForm] = useState(false);

  const handleAction = (id, name) => {
    console.log(id, name);
    setForm(true);
  };
  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button onClick={() => setForm(true)}>Add Field</Button>
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
      {addform && <AddForm setForm={setForm} />}
      <SettingWindowPages HeadName={select} handleAction={handleAction} />
    </>
  );
};

export default SoftwareSettingWindow;

function AddForm({ setForm }) {
  const [data, setData] = useState(null);
  const inputName = [
    { value: "ItemType", placeHolderName: "Item Type" },
    { value: "FieldName", placeHolderName: "Field Name" },
    { value: "Action", placeHolderName: "Action" },
  ];

  const handleSubmit = () => {
    setForm(false);
  };
  return (
    <SingleFormContainer
      windowHeader="Configuration Field"
      handleSubmit={handleSubmit}
    >
      <DynamicTextInput inputName={inputName} setData={setData} />
    </SingleFormContainer>
  );
}
