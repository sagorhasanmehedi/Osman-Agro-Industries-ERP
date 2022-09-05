import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import WalletCard from "../../components/wallet/WalletCard";
import {
  Button,
  ContainerPosition,
  HeaderName,
  PlainText,
  SelfContainer,
} from "./LandingPageStyled";

const WalletPage = () => {
  return (
    <Container style={{ minHeight: "90vh", marginTop: "100px" }}>
      <HeaderName FontSize="56px" Padding="0px" TextAlign="center">
        Start Selling On your website
      </HeaderName>
      <HeaderName
        FontSize="24px"
        FontWeight="400"
        Color="#76C1B9"
        Padding="0px"
        TextAlign="center"
      >
        Create an Nodejs Supper fast Online store in munites
      </HeaderName>
      <ContainerPosition></ContainerPosition>
      <SelfContainer style={{ margin: "50px 0px" }}>
        <Button
          Padding="10px 30px"
          BorderRadius="70px"
          FontSize="34px"
          FontWeight="600"
          Margin="auto"
        >
          Start Free Trial
        </Button>
      </SelfContainer>

      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <Row xs={1} md={3} className="g-4 pb-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <WalletCard />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default WalletPage;
