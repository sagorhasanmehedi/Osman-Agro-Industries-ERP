import React from "react";
import { Table } from "react-bootstrap";
import {
  CardContainer,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";
import { ActionEdit } from "../shared/ActionButtons";

const SettingWindowPages = ({ HeadName, handleAction }) => {
  return (
    <CardContainer>
      <HeaderName>{HeadName} Setting List</HeaderName>
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
            <th>Field Name</th>
            <th
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "0px" }}>Action</p>
              <p style={{ display: "flex", margin: "0px" }}>
                <span>yes</span>
                <span style={{ padding: "0px 10px" }}>|</span>
                <span>no</span>
              </p>
            </th>
            <th>Configuraton Field</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Id</td>
              <td>Field Name</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input type="radio" Width="50px" name="selected" />
                <Input type="radio" Width="50px" name="selected" />
              </td>
              <td>
                <ActionEdit id={idx} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default SettingWindowPages;
