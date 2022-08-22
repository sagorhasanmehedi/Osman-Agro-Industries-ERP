import React from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import {
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";

const SaleWindowTable = () => {
  return (
    <CardContainer>
      <HeaderName>Sale Details List</HeaderName>
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
            <th>Si</th>
            <th>Invoice</th>
            <th>Status</th>
            <th>Vehicle No</th>
            <th>Net Bill</th>
            <th>Pail Bill</th>
            <th>Due Bill </th>
            <th>Rent Office Fee </th>
            <th>Creator</th>
            <th>Status</th>
            <th>Acton</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Si</td>
              <td>Invoice</td>
              <td>Status</td>
              <td>Vehicle No</td>
              <td>Net Bill</td>
              <td>Pail Bill</td>
              <td>Due Bill </td>
              <td>Rent Office Fee </td>
              <td>Creator</td>
              <td>delivered</td>

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
};

export default SaleWindowTable;
