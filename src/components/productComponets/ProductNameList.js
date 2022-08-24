import React from "react";
import {
  Button,
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ProductNameList = ({ name, datas, handleUpdate }) => {
  return (
    <CardContainer>
      <HeaderName>{name} List</HeaderName>
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
            <th>{name} Name</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>Id</td>
              <td>Brand Name</td>

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
                    <Dropdown.Item onClick={(id) => handleUpdate(id)}>
                      Update
                    </Dropdown.Item>
                    <Dropdown.Item onClick={(id) => handleUpdate(id)}>
                      Delete
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

export default ProductNameList;
