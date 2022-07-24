import React from "react";
import {
  Button,
  CardContainer,
  Input,
  Lavel,
} from "../../Pages/landingPage/LandingPageStyled";
import { Row, Col } from "react-bootstrap";
import { PlainText2 } from "../../Pages/sale/SaleStyled";

const BialogycalForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Input type="date" name="DateOfBirth" />
        </Col>
        <Col>
          <Input type="text" name="Gender" placeholder="Enter Gender" />
        </Col>
        <Col>
          <Input type="number" name="NidNo" placeholder="Enter No" />
        </Col>
        <Col>
          <Input
            type="number"
            name="BirthCertificateNo"
            placeholder="Enter BirthCertificate No"
          />
        </Col>
        <Col>
          <Input type="number" name="Emer" placeholder="Emer: Contact Parson" />
        </Col>
        <Col>
          <Input type="number" name="MobileNo" placeholder="Mobile No" />
        </Col>
        <Col>
          <Input
            type="number"
            name="HomeMobileNo"
            placeholder="Home Mobile No"
          />
        </Col>
        <Col>
          <Input
            type="number"
            name="FriendMobileNo"
            placeholder="Friend Mobile No"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PlainText2>Education Qualification</PlainText2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" name="Examination" placeholder="Examination" />
        </Col>
        <Col>
          <Input type="text" name="Board" placeholder="Board/Institute" />
        </Col>
        <Col>
          <Input type="text" name="Degree" placeholder="Group/Subject/Degree" />
        </Col>
        <Col>
          <Input type="number" name="Result" placeholder="Result" />
        </Col>
        <Col>
          <Input type="number" name="Year" placeholder="Year" />
        </Col>
        <Col>
          <Input type="number" name="Roll" placeholder="Roll" />
        </Col>
        <Col>
          <Input type="number" name="Registration" placeholder="Registration" />
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Upload Your Profile</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
        <Col>
          <Lavel>Upload Your NID</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button Padding="10px 40px"> Save </Button>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default BialogycalForm;
