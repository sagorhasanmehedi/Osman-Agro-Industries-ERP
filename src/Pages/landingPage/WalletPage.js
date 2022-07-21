import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import WalletCard from "../../components/wallet/WalletCard";
import { Button, ContainerCenter, PlainText } from "./LandingPageStyled";

const WalletPage = () => {
  return (
    <Container style={{ minHeight: "90vh" }}>
      <PlainText FontSize="64px" FontWeight="600" TextAlign="center">
        Start Selling On your website
      </PlainText>
      <PlainText
        FontSize="28px"
        FontWeight="600"
        Color="#76C1B9"
        TextAlign="center"
      >
        Create an Nodejs Supper fast Online store in munites
      </PlainText>
      <ContainerCenter style={{ margin: "20px 0px" }}>
        <Button
          Padding="10px 30px"
          BorderRadius="70px"
          FontSize="34px"
          FontWeight="600"
        >
          Start Free Trial
        </Button>
      </ContainerCenter>
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
