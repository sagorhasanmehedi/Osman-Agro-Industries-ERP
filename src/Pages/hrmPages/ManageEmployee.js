import React from "react";
import {
  ButtonGroupContainer,
  Select,
  Button,
  Input,
  CardContainer,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { useNavigate } from "react-router-dom";
import { Table, Dropdown } from "react-bootstrap";

const ManageEmployee = () => {
  const navigate = useNavigate();
  const HandleEmployee = () => {
    navigate("/hrm/addemployee");
  };
  return (
    <>
      <PlainText2>Manage Employee </PlainText2>
      <ManageFilter HandleEmployee={HandleEmployee} />
      <ManageEmployeeList />
    </>
  );
};

export default ManageEmployee;

function ManageFilter({ HandleEmployee }) {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Button style={{ marginRight: "auto" }} onClick={HandleEmployee}>
        Add Employee
      </Button>
      <Input type="search" placeholder="Invoice Search" Width="250px" />
      <Select Width="150px">
        <option>Division</option>
        <option>Division</option>
      </Select>
      <Select Width="150px">
        <option>Designation</option>
        <option>Designation</option>
      </Select>
      <Button style={{ marginRight: "auto" }}>Search</Button>
      <Button Background="#1B253F">Print</Button>
    </ButtonGroupContainer>
  );
}

function ManageEmployeeList() {
  return (
    <CardContainer>
      {" "}
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
            <th>SL.</th>
            <th>Name</th>
            <th>Division</th>
            <th>Designation</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Name</td>
              <td>Division</td>
              <td>Designation</td>
              <td>Mobile No</td>
              <td>Address</td>
              <td>Status</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      background: "#54D487",
                      border: "none",
                    }}
                  >
                    View
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Add Delivery
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
