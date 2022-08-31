import React, { useState } from "react";
import { Table } from "react-bootstrap";
import AddSingleType from "../../components/forms/AddSingleType";
import { ActionEditAndDelete } from "../../components/shared/ActionButtons";

import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";

const WireHouseType = () => {
  const [data, setData] = useState(null);
  const inputName = [
    { placeHolderName: "Warehouse Type", value: "WarehouseType" },
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
      {/* <AddSingleType
        windowHeader="Add Wirehouse Type"
        inputName={inputName}
        setData={setData}
        handleSubmit={handleSubmit}
      /> */}
      <TableList handleAction={handleAction} />
    </>
  );
};
export default WireHouseType;

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
            <th>Wirehouse Type Name</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Id</td>
              <td>Wirehouse Type Name</td>
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
