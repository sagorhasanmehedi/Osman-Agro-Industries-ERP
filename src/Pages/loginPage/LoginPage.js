import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Input, CardContainer, Lavel, Button } from "./LoginStyled";
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
            <Lavel onChange={(e) => console.log(e.target.value)}>
              <option>Company</option>
              <option value="Wixtech1">Wixtech</option>
              <option value="Wixtech2">Wixtech2</option>
              <option value="Wixtech3">Wixtech3</option>
            </Lavel>

            <Input type="email" placeholder="Email" />
            <Input type="phone" placeholder="Phone" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
