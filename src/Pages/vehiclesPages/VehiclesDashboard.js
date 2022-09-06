import React from "react";
import { Col, Row } from "react-bootstrap";
import IncomeExpenseChart from "../../components/dashBoardComponents/IncomeExpenseChart";
import { CardContainer, HeaderName } from "../landingPage/LandingPageStyled";
import vehicles1 from "../../assets/vehicles1.png";
import vehicles2 from "../../assets/vehicles2.png";
import vehicles3 from "../../assets/vehicles3.png";
import vehicles4 from "../../assets/vehicles4.png";
import VehiclesActivityCard from "../../components/dashBoardComponents/VehiclesActivityCard";
const dataSet1 = [
  {
    name: "Total Vehicles",
    total: "22",
    icon: vehicles1,
  },
  {
    name: "Total Drivers",
    total: "34",
    icon: vehicles2,
  },
  {
    name: "Total Customer",
    total: "44",
    icon: vehicles3,
  },
  {
    name: "Total Trips",
    total: "234",
    icon: vehicles4,
  },
];
const VehiclesDashboard = () => {
  return (
    <div>
      <Row xs={1} sm={2} lg={3} xl={4}>
        {dataSet1.map((data, index) => (
          <Col key={index}>
            <VehiclesActivityCard data={data} />
          </Col>
        ))}
      </Row>
      <IncomeExpense />
    </div>
  );
};

export default VehiclesDashboard;

function IncomeExpense() {
  return (
    <Row>
      <Col xs={12}>
        <CardContainer>
          <HeaderName TextAlign="center">Vehicles Income Expense</HeaderName>
          <IncomeExpenseChart />
        </CardContainer>
      </Col>
    </Row>
  );
}
