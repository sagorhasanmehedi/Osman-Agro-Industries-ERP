import React from "react";
import { CardContainer } from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const VoucherApprovalList = () => {
  return (
    <CardContainer>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white", marginTop: "10px" }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>S.I</th>
            <th>Date</th>
            <th>Voucher No</th>
            <th>Voucher Type</th>
            <th>Note</th>
            <th>Debit Amount</th>
            <th>Credit Amount</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td>S.I</td>
              <td>Date</td>
              <td>Voucher No</td>
              <td>Voucher Type</td>
              <td>Note</td>
              <td>Debit Amount</td>
              <td>Credit Amount</td>
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
                    <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reject</Dropdown.Item>
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

export default VoucherApprovalList;
