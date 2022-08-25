import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import {
  Button,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";
import { PlainText2 } from "../../Pages/sale/SaleStyled";

const SalaryGenerateForm = () => {
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([
    { name: "1" },
    { name: "2" },
    { name: "3" },
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
      <SalaryForm inputList={inputList} handleInputChange={handleInputChange} />
      <ContainerPosition Margin="10px 0px">
        <Button>Save</Button>
      </ContainerPosition>
    </>
  );
};

export default SalaryGenerateForm;

function SalaryForm({ inputList, handleInputChange }) {
  return (
    <CardContainer>
      <Row>
        <Col>
          <Lavel>SL.</Lavel>
        </Col>
        <Col>
          <Lavel>Salary Slip No </Lavel>
        </Col>
        <Col>
          <Lavel>Account No</Lavel>
        </Col>
        <Col>
          <Lavel>Account Name</Lavel>
        </Col>
        <Col>
          <Lavel>Mobile No</Lavel>
        </Col>
        <Col>
          <Lavel>Joining Date </Lavel>
        </Col>
        <Col>
          <Lavel>Basic Salary </Lavel>
        </Col>
        <Col>
          <Lavel>Medical Fee (+)</Lavel>
        </Col>
        <Col>
          <Lavel>Transport Fee (+) </Lavel>
        </Col>
        <Col>
          <Lavel>Gross Salary</Lavel>
        </Col>
        <Col>
          <Lavel>Provident Fund (-) </Lavel>
        </Col>
        <Col>
          <Lavel>Late / Early(-) </Lavel>
        </Col>
        <Col>
          <Lavel>Absent</Lavel>
        </Col>
        <Col>
          <Lavel> Total Deduction </Lavel>
        </Col>
        <Col>
          <Lavel>Net Salary</Lavel>
        </Col>
        <Col>
          <Lavel>Action</Lavel>
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
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="status"
                  //   value={x.checkOut}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Col>
            </Row>
          );
        })}
    </CardContainer>
  );
}
