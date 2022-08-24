import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
  Select,
} from "../landingPage/LandingPageStyled";
import { useNavigate } from "react-router-dom";
import { PlainText2 } from "../sale/SaleStyled";

const MenualAttendence = () => {
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([
    { name: "tanvir" },
    { name: "tanvik" },
    { name: "tanvig" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleSubmit = () => {
    console.log(inputList);
    navigate("/attendence/manageattendence");
  };
  return (
    <>
      <PlainText2>Menual Attendence</PlainText2>
      <AttendenceForm
        inputList={inputList}
        handleInputChange={handleInputChange}
      />
      <ContainerPosition Margin="10px 0px">
        <Button onClick={handleSubmit}>Save</Button>
      </ContainerPosition>
    </>
  );
};

export default MenualAttendence;

function AttendenceForm({ inputList, handleInputChange }) {
  return (
    <CardContainer>
      <Row>
        <Col>
          <Lavel>Name</Lavel>
        </Col>
        <Col>
          <Lavel>Check In</Lavel>
        </Col>
        <Col>
          <Lavel>Check Out</Lavel>
        </Col>
        <Col>
          <Lavel>Status</Lavel>
        </Col>
      </Row>
      {inputList !== null &&
        inputList?.map((x, i) => {
          return (
            <Row key={i}>
              <Col>
                <Input
                  type="text"
                  name="Name"
                  value={x.name}
                  disabled
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="checkIn"
                  //   value={x.checkIn}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="checkOut"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Select
                  name="status"
                  //   value={x.status}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>Late</option>
                  <option>Present</option>
                  <option>Absent</option>
                </Select>
              </Col>
            </Row>
          );
        })}
    </CardContainer>
  );
}
