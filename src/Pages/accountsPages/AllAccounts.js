import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
  Select,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const AllAccounts = () => {
  return (
    <>
      <PlainText2>All Accounts</PlainText2>
      <ButtonGroupContainer Gap="10px">
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>Account No</option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>Account Type</option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>Category </option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>Area </option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>City </option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>District </option>
          ))}
        </Select>
        <Select Width="200px">
          {[1, 2, 3].map((value, index) => (
            <option key={index}>Thana </option>
          ))}
        </Select>
        <Input
          Width="200px"
          placeholder="Type Account name, address, mobile or bank ac no"
        />
        <Input Width="200px" placeholder="Type Responsible Name" />
        <Button>Search</Button>
        <Button>Print</Button>
      </ButtonGroupContainer>
      <CardContainer>
        <HeaderName>Accouts List</HeaderName>
        <AccountsTable />
      </CardContainer>
    </>
  );
};

export default AllAccounts;

function AccountsTable() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white" }}
    >
      <tbody>
        <tr>
          <th>SL.</th>
          <th>Account No</th>
          <th>Account Name</th>
          <th>Address</th>
          <th>Mobile No</th>
          <th>Email</th>
          <th>Amount type</th>
          <th>City</th>
          <th>District</th>
          <th>Than</th>
          <th>Response</th>
          <th>Balance</th>
          <th>Status</th>
          <th>Profile View</th>
        </tr>
        {[1, 2, 3, 4].map((_, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Account No</td>
            <td>Account Name</td>
            <td>Address</td>
            <td>Mobile No</td>
            <td>Email</td>
            <td>Amount type</td>
            <td>City</td>
            <td>District</td>
            <td>Than</td>
            <td>Response</td>
            <td>Balance</td>
            <td>Status</td>
            <td>Profile View</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
