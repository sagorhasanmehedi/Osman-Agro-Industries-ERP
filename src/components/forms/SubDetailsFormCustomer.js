import React from "react";
import {
  Input,
  Lavel,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";

export const SelectOne = () => {
  return (
    <>
      <Select>
        {[1, 2, 3].map((data, index) => (
          <option key={index}>Search Customer and Select {index}</option>
        ))}
      </Select>
    </>
  );
};

export const CustomerDetails = () => {
  return (
    <>
      <Lavel>Name</Lavel>
      <Input type="text" name="Name" />
      <Lavel>Address</Lavel>
      <Input type="text" name="Address" />
      <Lavel>Phone1</Lavel>
      <Input type="tel" name="Phone1" />
      <Lavel>Phone2</Lavel>
      <Input type="tel" name="Phone2" />
      <Lavel>Email</Lavel>
      <Input type="email" name="Email" />
    </>
  );
};
