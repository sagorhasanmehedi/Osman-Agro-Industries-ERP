import React from "react";
import { Table } from "react-bootstrap";

const TodaysOverview = () => {
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
          <th>Todays Report</th>
          <th>TK</th>
        </tr>

        <tr>
          <td>Total Sales</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>Total Purchase</td>
          <td>2000</td>
        </tr>

        <tr className="tableHeader">
          <th>Total Taka</th>
          <th>4000</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default TodaysOverview;
