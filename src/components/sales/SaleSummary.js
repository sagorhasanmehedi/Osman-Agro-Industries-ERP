import React from "react";
import Table from "react-bootstrap/Table";
import {
  Button,
  CardContainer,
  Input,
  Lavel,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";

const SaleSummary = () => {
  return (
    <CardContainer>
      <Row>
        <Col xs={6}>
          <div
            style={{
              padding: "10px",
              border: "1px solid black",
              height: "100%",
            }}
          >
            sale Details
          </div>
        </Col>
        <Col xs={6}>
          <Table
            striped
            responsive
            bordered
            hover
            size="sm"
            style={{ background: "white" }}
          >
            <tbody>
              <tr>
                <th>Total Sale Amount</th>
                <th>0</th>
              </tr>
              <tr>
                <th>Tax Amount</th>
                <th>0</th>
              </tr>
              <tr>
                <th>Service Charge</th>
                <th>0</th>
              </tr>
              <tr>
                <th>Shipping Cost</th>
                <th>0</th>
              </tr>
              <tr>
                <th>Grand Total</th>
                <th>20000</th>
              </tr>
              <tr>
                <th>Paid Amount</th>
                <th>0</th>
              </tr>
              <tr>
                <th>Pervious Balance</th>
                <th>200000</th>
              </tr>
              <tr>
                <th>Current Balance</th>
                <th>200000</th>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default SaleSummary;
