import React from "react";
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import {
  Button,
  ButtonGroupContainer,
} from "../../Pages/landingPage/LandingPageStyled";

export const ActionView = ({ id, handleAction }) => {
  return (
    <Button
      Padding="5px 10px"
      Background="#5B82FD"
      onClick={() => handleAction(id, "view")}
    >
      <FaEye size="15px" style={{ marginRight: "5px" }} />
      view
    </Button>
  );
};

export const ActionEdit = ({ id, handleAction }) => {
  return (
    <Button
      Padding="5px 10px"
      Background="#4FBCF5"
      onClick={() => handleAction(id, "edit")}
    >
      <FaRegEdit size="15px" style={{ marginRight: "5px" }} />
      Edit
    </Button>
  );
};

export const ActionDelete = ({ id, handleAction }) => {
  return (
    <Button
      Padding="5px 10px"
      Background="Red"
      onClick={() => handleAction(id, "remove")}
    >
      <FaTrashAlt size="15px" style={{ marginRight: "5px" }} />
      Delete
    </Button>
  );
};

export const ActionEditAndDelete = ({ id, handleAction }) => {
  return (
    <ButtonGroupContainer
      Possition="center"
      Gap="5px"
      Shadow="none"
      Background="none"
      FlexWrap="nowrap"
    >
      <Button
        Padding="5px 10px"
        Background="#4FBCF5"
        onClick={() => handleAction(id, "edit")}
      >
        <FaRegEdit size="15px" style={{ marginRight: "5px" }} />
        Edit
      </Button>
      <Button
        Padding="5px 10px"
        Background="Red"
        onClick={() => handleAction(id, "remove")}
      >
        <FaTrashAlt size="15px" style={{ marginRight: "5px" }} />
        Delete
      </Button>
    </ButtonGroupContainer>
  );
};

export const ActionAll = ({ id, handleAction }) => {
  return (
    <ButtonGroupContainer
      Possition="center"
      Gap="5px"
      Shadow="none"
      Background="none"
      FlexWrap="nowrap"
    >
      <Button
        Padding="5px 10px"
        Background="#5B82FD"
        onClick={() => handleAction(id, "view")}
      >
        <FaEye size="15px" style={{ marginRight: "5px" }} />
        view
      </Button>
      <Button
        Padding="5px 10px"
        Background="#4FBCF5"
        onClick={() => handleAction(id, "edit")}
      >
        <FaRegEdit size="15px" style={{ marginRight: "5px" }} />
        Edit
      </Button>
      <Button
        Padding="5px 10px"
        Background="Red"
        onClick={() => handleAction(id, "remove")}
      >
        <FaTrashAlt size="15px" style={{ marginRight: "5px" }} />
        Delete
      </Button>
    </ButtonGroupContainer>
  );
};
