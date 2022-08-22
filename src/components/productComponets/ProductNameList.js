import React from "react";
import {
  Button,
  CardContainer,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";

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
                <Button onClick={(id) => handleUpdate(id)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default ProductNameList;
