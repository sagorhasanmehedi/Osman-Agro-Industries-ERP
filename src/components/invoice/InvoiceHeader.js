import React from "react";
import {
  ContainerPosition,
  HeaderName,
} from "../../Pages/landingPage/LandingPageStyled";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const InvoiceHeader = () => {
  return (
    <>
      <HeaderName FontSize="40px" Padding="0px" TextAlign="center">
        Osman Agro Industries (Pvt) Ltd.
      </HeaderName>
      <HeaderName FontSize="18px" Padding="0px" TextAlign="center">
        Akhra, Mohadevpur, Naogaon
      </HeaderName>
      <HeaderName FontSize="18px" Padding="0px" TextAlign="center">
        Chairman: Alhaj Mohammad Osman Goni
      </HeaderName>
      <ContainerPosition
        Possition="space-between"
        style={{ padding: "10px 30px" }}
      >
        <div>
          <HeaderName FontSize="12px" Padding="0px">
            <FaPhoneAlt /> 01761-491509
          </HeaderName>
          <HeaderName FontSize="12px" Padding="0px">
            <FaPhoneAlt /> 01761-491509
          </HeaderName>
        </div>

        <div>
          <HeaderName FontSize="12px" Padding="0px">
            <FaEnvelope /> osmanagroind@gmail.com
          </HeaderName>
          <HeaderName FontSize="12px" Padding="0px">
            <FaEnvelope /> osmanagroind@gmail.com
          </HeaderName>
        </div>
      </ContainerPosition>
    </>
  );
};

export default InvoiceHeader;
