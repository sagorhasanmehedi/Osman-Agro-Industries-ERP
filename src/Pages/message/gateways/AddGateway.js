import React from "react";
import AddGatewayForm from "../../../components/message/gateways/AddGatewayForm";
import { PlainText2 } from "../../sale/SaleStyled";

const AddGateway = () => {
  return (
    <>
      <PlainText2 style={{textAlign:"center",margin:"10px 0"}}>Add Gateway</PlainText2>
      <AddGatewayForm/>
    </>
  );
};

export default AddGateway;
