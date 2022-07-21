import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Input, CardContainer, Button, Select } from "./LandingPageStyled";
import loginImage from "../../assets/loginImage.png";

const LoginPage = () => {
  return (
    <Container
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row xs={1} md={2}>
        <Col>
          <img src={loginImage} alt="" width="100%" height="100%" />
        </Col>
        <Col>
          <CardContainer>
            <Select
              onChange={(e) => console.log(e.target.value)}
              Padding="21px 14px"
            >
              <option>Company</option>
              <option value="Wixtech1">Wixtech</option>
              <option value="Wixtech2">Wixtech2</option>
              <option value="Wixtech3">Wixtech3</option>
            </Select>

            <Input type="email" placeholder="Email" Padding="21px 14px" />
            <Input type="phone" placeholder="Phone" Padding="21px 14px" />
            <Input type="password" placeholder="Password" Padding="21px 14px" />
            <Button Padding="20px 100px">Login</Button>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
