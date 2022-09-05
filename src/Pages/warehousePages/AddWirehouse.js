import React, { useState } from "react";
import { Table } from "react-bootstrap";
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

const AddWirehouse = () => {
  const [data, setData] = useState(null);

  const inputName = [
    { placeHolderName: "Company Name", value: "CompanyName" },
    { placeHolderName: "Warehouse Name", value: "WarehouseName" },
  ];

  const handleSubmit = () => {
    console.log(data);
  };

  const handleAction = (id, action) => {
    console.log(id, action);
  };

  return (
    <>
      <ButtonGroupContainer Gap="6px" Background="none" Shadow="none">
        <Button>Add Wirehouse</Button>
        <Input
          type="text"
          placeholder="Invoice Search"
          Width="250px"
          style={{ marginLeft: "auto" }}
        />
      </ButtonGroupContainer>
      {/* <SingleFormContainer
        windowHeader="Company Setting Window"
        handleSubmit={handleSubmit}
      >
        <DynamicTextInput inputName={inputName} setData={setData} />
      </SingleFormContainer> */}
      <TableList handleAction={handleAction} />
    </>
  );
};
export default AddWirehouse;

const TableList = ({ handleAction }) => {
  return (
    <CardContainer>
      <HeaderName>Wirehouse Type List</HeaderName>
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
            <th>Id</th>
            <th>Company Name</th>
            <th>Warehouse Name</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Id</td>
              <td>Company Name</td>
              <td>Warehouse Name</td>
              <td>
                <ActionEditAndDelete id={idx} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};
