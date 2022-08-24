import React from "react";
import {
  ButtonGroupContainer,
  Button,
  Input,
  CardContainer,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";
import { useNavigate } from "react-router-dom";
import { Table, Dropdown } from "react-bootstrap";

const ManageAttendence = () => {
  const navigate = useNavigate();
  const handleAttendence = () => {
    navigate("/attendence/menualattendence");
  };
  return (
    <>
      <PlainText2>Manage Attendence </PlainText2>
      <ManageFilter HandleEmployee={handleAttendence} />
      <ManageEmployeeList />
    </>
  );
};

export default ManageAttendence;

function ManageFilter({ HandleEmployee }) {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Button style={{ marginRight: "auto" }} onClick={HandleEmployee}>
        Add Attendence
      </Button>
      <Input type="search" placeholder="Attendence Search" Width="250px" />
      <Lavel>Start Date</Lavel>
      <Input type="date" Width="250px" />
      <Lavel>End Date</Lavel>
      <Input type="date" Width="250px" />
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
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((valeu, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Name</td>
              <td>Date</td>
              <td>Check In</td>
              <td>Check Out</td>
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
                    <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
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
