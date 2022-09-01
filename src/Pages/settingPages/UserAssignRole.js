import React, { useState } from "react";
import { Col, Table } from "react-bootstrap";
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
  Select,
} from "../landingPage/LandingPageStyled";

const UserAssignRole = () => {
  const [addform, setForm] = useState(false);
  const handleAction = (id, action) => {
    setForm(true);
    console.log(id, action);
  };
  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button onClick={() => setForm(true)}>Add User Role</Button>
        <Input
          type="search"
          placeholder="Usser Role"
          Width="250px"
          style={{ marginLeft: "auto" }}
        />
        <Button>Search</Button>
      </ButtonGroupContainer>
      {addform && <AddForm setForm={setForm} />}
      <UserRoleList HeadName="Currency" handleAction={handleAction} />
    </>
  );
};

export default UserAssignRole;

function AddForm({ setForm }) {
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setForm(false);
  };
  return (
    <SingleFormContainer
      windowHeader="Add User Role"
      handleSubmit={handleSubmit}
    >
      <Col>
        <Select>
          <option>user name</option>
          <option>user name</option>
          <option>user name</option>
          <option>user name</option>
        </Select>
      </Col>
      <Col>
        <Select>
          <option>user Role</option>
          <option>user Role</option>
          <option>user Role</option>
          <option>user Role</option>
        </Select>
      </Col>
    </SingleFormContainer>
  );
}

function UserRoleList({ HeadName, handleAction }) {
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
            <th>User Name</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>S.I</td>
              <td>User Name</td>
              <td>User Role</td>
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
