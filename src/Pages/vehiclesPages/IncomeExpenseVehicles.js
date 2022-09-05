import React from "react";
import {
  CardContainer,
  Button,
  Input,
  PlainHeaderContainer,
} from "../../Pages/landingPage/LandingPageStyled";
import { Table } from "react-bootstrap";
import { PlainText2 } from "../sale/SaleStyled";
import { ActionAll } from "../../components/shared/ActionButtons";

const IncomeExpenseVehicles = () => {
  return (
    <>
      <PlainText2>Income Expense</PlainText2>
      <IncomeExpenseNav />
      <IncomeExpenseList />
    </>
  );
};

export default IncomeExpenseVehicles;

function IncomeExpenseNav() {
  return (
    <PlainHeaderContainer Possition="space-between">
      <Button>Add IncomeExpense</Button>
      <Input Width="300px" placeholder="serch Income expense" />
    </PlainHeaderContainer>
  );
}

function IncomeExpenseList() {
  const handleAction = (id, action) => {
    console.log(id, action);
  };
  return (
    <CardContainer>
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
            <th>SL.</th>
            <th>Vehicles</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
          {[1, 2, 2, 4].map((value, index) => (
            <tr key={index}>
              <td>SL.</td>
              <td>Vehicles</td>
              <td>Date</td>
              <td>Description</td>
              <td>Amount</td>
              <td>Type</td>
              <td>
                <ActionAll id={index} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
