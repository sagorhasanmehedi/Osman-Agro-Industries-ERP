import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Input,
  CardContainer,
  Button,
  Select,
  HeaderName,
  SelfContainer,
} from "./LandingPageStyled";
import loginImage from "../../assets/loginImage.png";

const LoginPage = () => {
  return (
    <Container
      style={{ background: "white", borderRadius: "4px", marginTop: "100px" }}
    >
      {/* <CardContainer Padding="0px"> */}
      <Row>
        <Col xs={12} md={8} style={{ padding: "0px" }}>
          <img src={loginImage} alt="" width="100%" height="100%" />
        </Col>
        <Col xs={12} md={4}>
          <SelfContainer>
            <HeaderName FontSize="24px" Color="#54D487">
              Login to your Account
            </HeaderName>
            <Select
              onChange={(e) => console.log(e.target.value)}
              Padding="11px 20px"
            >
              <option>Company</option>
              <option value="Wixtech1">Wixtech</option>
              <option value="Wixtech2">Wixtech2</option>
              <option value="Wixtech3">Wixtech3</option>
            </Select>

            <Input
              type="text"
              placeholder="Enter Email or Phone number"
              Padding="11px 20px"
            />

            <Input type="password" placeholder="Password" Padding="11px 20px" />
            <Input
              type="submit"
              Padding="11px 20px"
              Background="#54D487"
              Color="white"
              value="Login"
            />
          </SelfContainer>
        </Col>
      </Row>
      {/* </CardContainer> */}
    </Container>
  );
};

export default LoginPage;
