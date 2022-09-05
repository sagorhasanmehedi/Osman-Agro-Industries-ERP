import React from "react";
import { HeaderName } from "../../Pages/landingPage/LandingPageStyled";

const InvoiceFooter = () => {
  return (
    <div style={{ padding: "10px 30px" }}>
      <HeaderName
        FontSize="18px"
        FontWeight="500"
        TextAlign="center"
        style={{ borderTop: "2px solid #1B253F" }}
      >
        For any kind of query, contact with :- 01761-491509, 01761-491509
      </HeaderName>
      <HeaderName
        FontSize="14px"
        FontWeight="500"
        TextAlign="center"
        style={{ borderTop: "2px solid #1B253F" }}
      >
        Messrs Ruhul Amin Automatic Rice Mill, Messrs Jamuna Automatic Rice
        Mill, Messrs Habiba Traders <br />
        Messrs Osman Trading Corporation, Messrs Adib Traders, Messrs Osman Agro
        Consummer Filling Station
      </HeaderName>
    </div>
  );
};

export default InvoiceFooter;
