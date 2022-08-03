import React from "react";
import { Table } from "react-bootstrap";

const KhamContainer = () => {
  return (
    <>
      <Kham1 />
      <Kham2 />
    </>
  );
};

export default KhamContainer;

function Kham1() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white", width: "960px", height: "432px" }}
    >
      <thead>
        <tr>
          <th colSpan={3} style={{ textAlign: "center" }}>
            To/Receiver
          </th>
        </tr>
        <tr>
          <th colSpan={3} style={{ textAlign: "center" }}>
            Vehicles: M.D.T 18-2022
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: "50px" }}>Name</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Adress</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Phone1</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Phone2</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Email</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

function Kham2() {
  return (
    <Table
      striped
      responsive
      bordered
      hover
      size="sm"
      style={{ background: "white", width: "960px", height: "432px" }}
    >
      <thead>
        <tr>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Main
          </th>
          <th colSpan={2} style={{ textAlign: "center" }}>
            To/Receiver
          </th>
        </tr>
        <tr>
          <th colSpan={4} style={{ textAlign: "center" }}>
            Vehicles: M.D.T 18-2022
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: "50px" }}>Name</td>
          <td></td>
          <td style={{ width: "50px" }}>Name</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Adress</td>
          <td></td>
          <td style={{ width: "50px" }}>Adress</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Phone1</td>
          <td></td>
          <td style={{ width: "50px" }}>Phone1</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Phone2</td>
          <td></td>
          <td style={{ width: "50px" }}>Phone2</td>
          <td></td>
        </tr>
        <tr>
          <td style={{ width: "50px" }}>Email</td>
          <td></td>
          <td style={{ width: "50px" }}>Email</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}
