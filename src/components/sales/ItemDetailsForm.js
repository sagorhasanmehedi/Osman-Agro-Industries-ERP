import React from "react";
import {
  Button,
  CardContainer,
  Input,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";

const ItemDetailsForm = () => {
  return (
    <CardContainer>
      <Row>
        <Col>
          <Select>
            <option>Item search and select</option>
            <option>Item search and select</option>
          </Select>
        </Col>
        <Col>
          <Input type="text" placeholder="Av.Qnty" />
        </Col>
        <Col>
          <Input type="number" placeholder="Bag" />
        </Col>
        <Col>
          <Input type="number" placeholder="Qnty" />
        </Col>
        <Col>
          <Input type="number" placeholder="Unite" />
        </Col>
        <Col>
          <Input type="number" placeholder="Rate" />
        </Col>
      </Row>
      <Row>
        <Col xs={11}>
          <Input type="number" placeholder="Note:" />
        </Col>
        <Col style={{ alignSelf: "center" }}>
          <Button>Add</Button>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default ItemDetailsForm;
