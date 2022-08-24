import React from "react";
import { Table } from "react-bootstrap";

const ReceivedMethod = () => {
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
        <tr >
          <th>Received Method</th>
          <th>RTGS or Transfer Account</th>
        </tr>

        <tr>
          <td>Cash Counter / Bank Ac [RTGS or Transfer] /Mobile Banking</td>
          <td>
            Jamuna Automatic Rice Mill-2050305225635352- Islami Bank Ltd-Naogaon
            Branch
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReceivedMethod;
