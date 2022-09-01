import React from "react";
import { Table } from "react-bootstrap";
import {
  CardContainer,
  HeaderName,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const RolePermissionForm = ({ HeadName, data }) => {
  return (
    <CardContainer>
      <HeaderName>{HeadName}</HeaderName>
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
            <th>Main menu</th>
            <th>Create All</th>
            <th>Read All</th>
            <th>Update All</th>
            <th>Delete All</th>
          </tr>
          {[1, 3, 4, 5].map((value, idx) => (
            <tr key={idx}>
              <td>{value}</td>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <Input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default RolePermissionForm;
