import React from "react";
import { Col, Row } from "react-bootstrap";
import DashBoardActivityCard from "../../components/dashBoardComponents/DashBoardActivityCard";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { HiGift } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { CardContainer, HeaderName } from "../landingPage/LandingPageStyled";
import SalePurchaseChart from "../../components/dashBoardComponents/SalePurchaseChart";
import SaleChart from "../../components/dashBoardComponents/SaleChart";
import ActivityChart from "../../components/dashBoardComponents/ActivityChart";
import TodaysOverview from "../../components/dashBoardComponents/TodaysOverview";

const dataSet1 = [
  {
    name: "Today Sales",
    money: "৳ 2,234",
    icon: <FaCartArrowDown />,
  },
  {
    name: "Today Payment",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Today Expense ",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Today Hand Cash",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },

  {
    name: "Today Purchase",
    money: "৳ 2,234",
    icon: <FaCartArrowDown />,
  },
  {
    name: "Today Received",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Today Income",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Today Bank Cash",
    money: "৳ 2,234",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Total Receivable Customer",
    money: "2,234",
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Total Payable Customer",
    money: "2,234",
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Total Customer",
    money: "2,234",
    icon: <IoIosPeople />,
  },
  {
    name: "Total Product",
    money: "2,234",
    icon: <HiGift />,
  },
];

const Index = () => {
  return (
    <>
      <HeaderName>DashBoard</HeaderName>
      <SaleAndPurchaseSection />
      <Row xs={1} sm={2} lg={3} xl={4}>
        {dataSet1.map((data, index) => (
          <Col key={index}>
            <DashBoardActivityCard data={data} />
          </Col>
        ))}
      </Row>
      <ActivitySection />
    </>
  );
};

export default Index;

function SaleAndPurchaseSection() {
  return (
    <Row>
      <Col xs={12} sm={12} lg={7} xl={8}>
        <CardContainer>
          <HeaderName TextAlign="center">Sale and Purchase Reports</HeaderName>
          <SalePurchaseChart />
        </CardContainer>
      </Col>
      <Col xs={12} sm={12} lg={5} xl={4}>
        <CardContainer>
          <HeaderName TextAlign="center">Activity Reports</HeaderName>
          <ActivityChart />
        </CardContainer>
      </Col>
    </Row>
  );
}
function ActivitySection() {
  return (
    <Row>
      <Col xs={12} sm={12} lg={7} xl={8}>
        <CardContainer>
          <HeaderName TextAlign="center">Sale Reports</HeaderName>
          <SaleChart />
        </CardContainer>
      </Col>
      <Col xs={12} sm={12} lg={5} xl={4}>
        <CardContainer>
          <HeaderName TextAlign="center">Todays overviews</HeaderName>
          <TodaysOverview />
        </CardContainer>
      </Col>
    </Row>
  );
}
