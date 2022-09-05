import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Input,
  Lavel,
  Select,
} from "../../../Pages/landingPage/LandingPageStyled";

const SelectCustomer = () => {
  return (
    <Row>
      <Col
        xs={12}
        sm={12}
        md={5}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Select>
          <option>Search Customer and Select</option>
          <option>Search Customer and Select</option>
          <option>Search Customer and Select</option>
        </Select>

        <Input
          type="checkbox"
          Width="30px"
          Shadow="none"
          style={{ marginLeft: "20px" }}
          onChange={(e) => console.log(e.target.checked)}
        />
        <Lavel Padding="0px">Cash</Lavel>
      </Col>
    </Row>
  );
};

export default SelectCustomer;
