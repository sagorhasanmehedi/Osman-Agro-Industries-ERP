import React from "react";
import { Table } from "react-bootstrap";

const KhamContainer = () => {
  return (
    <>
      <Kham1 />
      <br />
      <Kham2 />
    </>
  );
};

export default KhamContainer;

function Kham1() {
  return (
    <table className="kham" style={{ width: "960px", height: "432px" }}>
      <tbody>
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
        <tr>
          <td width="100px">Name</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Adress</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Phone1</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Phone2</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Email</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

function Kham2() {
  return (
    <table className="kham" style={{ width: "960px", height: "432px" }}>
      <tbody>
        <tr>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Main
          </th>
          <th colSpan={2} style={{ textAlign: "center" }}>
            To/Receiver
          </th>
        </tr>
        <tr style={{ textAlign: "center", borderBottom: "none" }}>
          <th colSpan={4}>Vehicles: M.D.T 18-2022</th>
        </tr>
        <tr>
          <td width="100px">Name</td>
          <td></td>

          <td width="100px">Name</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Adress</td>
          <td></td>

          <td width="100px">Adress</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Phone1</td>
          <td></td>

          <td width="100px">Phone1</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Phone2</td>
          <td></td>

          <td width="100px">Phone2</td>
          <td></td>
        </tr>
        <tr>
          <td width="100px">Email</td>
          <td></td>

          <td width="100px">Email</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
