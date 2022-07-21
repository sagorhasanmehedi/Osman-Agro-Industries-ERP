import React from "react";
import {
  Button,
  CardContainer,
  ContainerCenter,
  PlainText,
  WalletDiv,
} from "../../Pages/landingPage/LandingPageStyled";

const WalletCard = () => {
  return (
    <CardContainer Padding="0px">
      <WalletDiv TopLeft="10px" TopRight="10px">
        <PlainText
          TextAlign="center"
          FontSize="34px"
          FontWeight="600"
          Color="white"
        >
          StartUp
        </PlainText>
      </WalletDiv>
      <WalletDiv Background="#048FB8">
        <PlainText
          TextAlign="center"
          FontSize="16px"
          FontWeight="400"
          Color="white"
        >
          StartUp Busines
        </PlainText>
        <PlainText
          TextAlign="center"
          FontSize="36px"
          FontWeight="600"
          Color="white"
        >
          $29<small style={{ fontSize: "16px" }}>mo</small>
        </PlainText>
      </WalletDiv>
      <WalletDiv
        Background="white"
        BottomLeft="10px"
        BottomRight="10px"
        Padding="20px 10px"
      >
        <PlainText>Online Store : </PlainText>
        <PlainText>Products : 100</PlainText>
        <PlainText>Frameworks : Node js and React </PlainText>
        <PlainText>Server : Amazon and Initux CDN </PlainText>
        <PlainText>Facebook Manager : </PlainText>
        <PlainText>Facebook Order : </PlainText>
        <PlainText>24/7 Support : </PlainText>
        <ContainerCenter>
          <Button Padding="5px 10px" BorderRadius="10px">
            GET STARTED
          </Button>
        </ContainerCenter>
      </WalletDiv>
    </CardContainer>
  );
};

export default WalletCard;
