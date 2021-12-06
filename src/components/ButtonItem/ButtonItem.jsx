import React from "react";
import {
  ButtonDescription,
  ButtonIcon,
  ButtonInfo,
  ButtonItemContainer,
  ButtonTitle,
  RightIcon,
} from "./ButtonItemElements";

const ButtonItem = ({ title, description }) => {
  return (
    <ButtonItemContainer>
      <ButtonIcon></ButtonIcon>
      <ButtonInfo>
        <ButtonTitle>{title}</ButtonTitle>
        <ButtonDescription>{description}</ButtonDescription>
      </ButtonInfo>
      <RightIcon />
    </ButtonItemContainer>
  );
};

export default ButtonItem;
