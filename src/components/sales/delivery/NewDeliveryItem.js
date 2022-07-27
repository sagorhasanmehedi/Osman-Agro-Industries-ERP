import React from "react";
import { Input } from "../../../Pages/landingPage/LandingPageStyled";

const NewDeliveryItem = () => {
  return (
    <>
      <tr>
        <td>5</td>
        <td>
          <Input type="text" />
        </td>
        <td>
          <Input type="text" />
        </td>
        <td>
          <Input type="number" defaultValue={50} />
        </td>
        <td>
          <Input type="number" defaultValue={50} />
        </td>
        <td>
          <Input type="number" defaultValue={150} />
        </td>
        <td>
          <Input type="number" defaultValue={150} />
        </td>
        <td>
          <Input type="number" defaultValue={150} />
        </td>
        <td>
          <Input type="number" defaultValue={150} />
        </td>
        <td>
          <Input type="number" defaultValue={150} />
        </td>
      </tr>
    </>
  );
};

export default NewDeliveryItem;
