import React, { useState } from "react";
import {
  Button,
  ButtonGroupContainer,
  Input,
  Select,
} from "../../../Pages/landingPage/LandingPageStyled";
import Vector from "../../../assets/Vector.png";

const AddItems = () => {
  const [values, setvalues] = useState([
    { itemName: "", avQnty: 0, Bag: 0, Qnty: 0, Unite: 0, Rate: 0, Note: "" },
  ]);

  let handleChange = (i, e) => {
    let newValues = [...values];
    newValues[i][e.target.name] = e.target.value;
    setvalues(newValues);
  };

  let addFormFields = () => {
    setvalues([
      ...values,
      { itemName: "", avQnty: 0, Bag: 0, Qnty: 0, Unite: 0, Rate: 0, Note: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newValues = [...values];
    newValues.splice(i, 1);
    setvalues(newValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        {values.map((element, index) => (
          <ButtonGroupContainer
            Gap="10px"
            Margin="0px"
            Shadow="none"
            key={index}
          >
            <Select
              name="itemName"
              Width="200px"
              value={element.itemName || ""}
              onChange={(e) => handleChange(index, e)}
            >
              <option>Item search and select</option>
              <option>Item search and select</option>
            </Select>

            <Input
              type="number"
              Width="150px"
              placeholder="Av.Qnty"
              name="avQnty"
              value={element.avQnty || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              Width="150px"
              placeholder="Bag"
              name="Bag"
              value={element.bag || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              placeholder="Qnty"
              Width="150px"
              name="Qnty"
              value={element.Qnty || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              placeholder="Unite"
              Width="150px"
              name="Unite"
              value={element.Unite || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              Width="150px"
              placeholder="Rate"
              name="Rate"
              value={element.Rate || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              placeholder="Note:"
              Width="360px"
              name="Note"
              value={element.Note || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index > 0 && (
              <Button
                onClick={() => removeFormFields(index)}
                Background="#DD2424"
              >
                <img
                  src={Vector}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </Button>
            )}
          </ButtonGroupContainer>
        ))}
      </div>

      <Button
        Padding="10px 40px"
        Margin="10px 0px"
        onClick={() => addFormFields()}
      >
        Add
      </Button>
    </div>
  );
};

export default AddItems;
