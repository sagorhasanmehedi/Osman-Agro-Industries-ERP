import React from "react";
import {
    Button,
  CardContainer,
  ContainerPosition,
  Input,
  Lavel,
  TextAriea,
} from "../../Pages/landingPage/LandingPageStyled";
import { PlainText2 } from "../../Pages/sale/SaleStyled";

const CreateNewMessage = () => {
  return (
    <>
      <PlainText2>Create New Massage</PlainText2>
      <CardContainer Width="500px" Margin="auto">
        <Lavel>Mobail No</Lavel>
        <Input />
        <Lavel>Acount Name</Lavel>
        <Input />
        <Lavel>Message</Lavel>
        <TextAriea />
        <ContainerPosition>
            <Button>Send</Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default CreateNewMessage;
