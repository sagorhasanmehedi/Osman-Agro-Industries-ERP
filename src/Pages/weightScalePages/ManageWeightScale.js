import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  Button,
  CardContainer,
  Input,
  PlainHeaderContainer,
} from "../landingPage/LandingPageStyled";

const ManageWeightScale = () => {
  return (
    <>
      <ManageHeder />
      <ManageList />
    </>
  );
};

export default ManageWeightScale;

function ManageHeder() {
  return (
    <>
      <PlainHeaderContainer Possition="space-between">
        <NavLink to="/weightscale/addweightscale">
          <Button>Add New</Button>
        </NavLink>
        <Input Width="300px" placeholder="Enter weight Scale Id" />
      </PlainHeaderContainer>
    </>
  );
}

function ManageList() {
  return (
    <CardContainer>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{
          background: "white",
        }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>SL.</th>
            <th>Scale Id</th>
            <th>Vehicle No</th>
            <th>Account Name</th>
            <th>First Weight</th>
            <th>Second Weight</th>
            <th>Net Weight</th>
            <th>vehicle Rent Pay</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Scale Id</td>
              <td>Vehicle No</td>
              <td>Account Name</td>
              <td>First Weight</td>
              <td>Second Weight</td>
              <td>Net Weight</td>
              <td>vehicle Rent Pay</td>
              <td>Status</td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
