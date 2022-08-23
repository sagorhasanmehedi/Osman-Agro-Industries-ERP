import React from "react";
import { Table } from "react-bootstrap";

const ManageRepresentiveFrom = () => {
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
          <th>Representative Name</th>
          <th>Code</th>
          <th>Test data</th>
          <th>Test data</th>
          <th>Test data</th>
          <th>Test data</th>
          <th>Test data</th>
        </tr>

        {[1, 2, 2, 4].map((valeu, index) => (
          <tr key={index}>
            <td>SL.</td>
            <td>Representative Name</td>
            <td>Code</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ManageRepresentiveFrom;
