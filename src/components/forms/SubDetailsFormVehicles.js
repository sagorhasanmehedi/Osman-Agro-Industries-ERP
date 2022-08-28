import React from "react";
import { Input, Lavel } from "../../Pages/landingPage/LandingPageStyled";

export const VehiclesDetails = () => {
  return (
    <>
      <Lavel>Truc No</Lavel>
      <Input type="text" name="Name" />
      <Lavel>Driver Name</Lavel>
      <Input type="text" name="Address" />
      <Lavel>Address</Lavel>
      <Input type="tel" name="Phone1" />
      <Lavel>Phone1</Lavel>
      <Input type="tel" name="Phone2" />
      <Lavel>Phone2</Lavel>
      <Input type="tel" name="Phone2" />
    </>
  );
};
