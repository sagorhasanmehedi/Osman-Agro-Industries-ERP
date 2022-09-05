import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DynamicInput from "../../components/forms/DynamicInput";
import DynamicTextInput from "../../components/forms/DynamicTextInput";
import SingleFormContainer from "../../components/forms/SingleFormContainer";
import { ActionEdit } from "../../components/shared/ActionButtons";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";

const CurrencySetting = () => {
  const [addform, setForm] = useState(false);
  const handleAction = (id, action) => {
    setForm(true);
    console.log(id, action);
  };
  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button onClick={() => setForm(true)}>Add Currency</Button>
        <Input
          type="search"
          placeholder="Invoice Search"
          Width="250px"
          style={{ marginLeft: "auto" }}
        />
        <Button>Search</Button>
      </ButtonGroupContainer>
      {/* {addform && <AddForm setForm={setForm} />} */}
      <CurrencyList HeadName="Currency" handleAction={handleAction} />
    </>
  );
};

export default CurrencySetting;

function AddForm({ setForm }) {
  const [data, setData] = useState(null);
  const inputName = [
    { value: "FullName", placeHolderName: "Full Name" },
    { value: "PhoneNumber", placeHolderName: "Phone Number" },
  ];

  const handleSubmit = () => {
    setForm(false);
  };
  return (
    <SingleFormContainer
      windowHeader="Add User Form"
      handleSubmit={handleSubmit}
    >
      <DynamicTextInput inputName={inputName} setData={setData} />
      <DynamicInput
        inputName="UserProfile"
        inputType="file"
        setData={setData}
      />
    </SingleFormContainer>
  );
}

function CurrencyList({ HeadName, handleAction }) {
  return (
    <CardContainer>
      <HeaderName>{HeadName} Setting</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>S.I</th>
            <th>Currency Name</th>
            <th>Currency Symbol</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>S.I</td>
              <td>Currency Name</td>
              <td>Currency Symbol</td>
              <td>
                <ActionEdit id={idx} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
