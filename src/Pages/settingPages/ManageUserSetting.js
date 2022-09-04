import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DynamicInput from "../../components/forms/DynamicInput";
import DynamicTextInput from "../../components/forms/DynamicTextInput";
import SingleFormContainer from "../../components/forms/SingleFormContainer";
import { ActionEditAndDelete } from "../../components/shared/ActionButtons";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";

const ManageUserSetting = () => {
  const [addform, setForm] = useState(false);
  const handleAction = (id, action) => {
    setForm(true);
    console.log(id, action);
  };
  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button onClick={() => setForm(true)}>Add User</Button>
        <Input
          type="search"
          placeholder="Invoice Search"
          Width="250px"
          style={{ marginLeft: "auto" }}
        />
        <Button>Search</Button>
      </ButtonGroupContainer>
      {addform && <AddForm setForm={setForm} />}
      <ManageUserList HeadName="Manage User" handleAction={handleAction} />
    </>
  );
};

export default ManageUserSetting;

function AddForm({ setForm }) {
  const [data, setData] = useState(null);
  const inputName = [
    { value: "FullName", placeHolderName: "Full Name" },
    { value: "PhoneNumber", placeHolderName: "Phone Number" },
    { value: "Email", placeHolderName: "Email" },
    { value: "Password", placeHolderName: "Password" },
    { value: "UserType", placeHolderName: "User Type" },
    { value: "Status", placeHolderName: "Status" },
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

function ManageUserList({ HeadName, handleAction }) {
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
            <th>User Image</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>S.I</td>
              <td>User Image</td>
              <td>User Name</td>
              <td>User Email</td>
              <td>User Phone</td>
              <td>Status</td>
              <td>
                <ActionEditAndDelete id={idx} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
