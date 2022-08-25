import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { Table } from "react-bootstrap";

const ManageBankBranchForm = () => {
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
        <tr className="tableHeader">
          <th>SL.</th>
          <th>Bank Name</th>
          <th>Brance Name</th>

          <th>Action</th>
        </tr>

        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Bank Name</td>
            <td>Brance Name</td>

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
                  <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Action3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ManageBankBranchForm;
