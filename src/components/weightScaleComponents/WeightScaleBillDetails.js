import React from "react";
import { Table } from "react-bootstrap";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const WeightScaleBillDetails = () => {
  return (
    <>
      <HeaderName>Weight Scale Bill Datails</HeaderName>
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
            <th>Bill Account</th>
            <th>Weight Fee</th>
            <th>Cash Counter</th>
            <th>Oparetor Not</th>
          </tr>
          <tr>
            <td>Bill Account</td>
            <td>Weight Fee</td>
            <td>Cash Counter</td>
            <td>Oparetor Not</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default WeightScaleBillDetails;
