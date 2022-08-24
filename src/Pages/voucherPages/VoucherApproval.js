import React from "react";
import VoucherApprovalList from "../../components/PaymentVoucherComponents/VoucherApprovalList";
import {
  ButtonGroupContainer,
  Input,
  Select,
  Button,
  Lavel,
} from "../landingPage/LandingPageStyled";
import { PlainText2 } from "../sale/SaleStyled";

const VoucherApproval = () => {
  return (
    <>
      <PlainText2>Voucher Approval Window</PlainText2>
      <FilterSection />
      <VoucherApprovalList />
    </>
  );
};

export default VoucherApproval;

function FilterSection() {
  return (
    <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
      <Input type="text" placeholder=" search" Width="250px" />
      <Lavel>Start Date</Lavel>
      <Input type="date" placeholder=" search" Width="250px" />
      <Lavel>End Date</Lavel>
      <Input type="date" placeholder=" search" Width="250px" />
      <Button>Search</Button>
      <Button style={{ marginLeft: "auto" }} Background="#1B253F">
        Print
      </Button>
    </ButtonGroupContainer>
  );
}
