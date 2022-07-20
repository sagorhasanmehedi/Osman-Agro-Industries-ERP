import React from "react";
import AppBar from "../../components/appBar/AppBar";
import LoginPage from "../loginPage/LoginPage";
import WalletPage from "./WalletPage";

const LandingPage = () => {
  return (
    <div style={{ background: "#F2F2F2", minHeight: "100vh" }}>
      <AppBar />
      <LoginPage />
      <WalletPage />
    </div>
  );
};

export default LandingPage;
