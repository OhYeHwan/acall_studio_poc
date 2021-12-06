import React from "react";
import {
  ButtonListContainer,
  ButtonListWrapper,
} from "./ButtonListItemElements.jsx";
import ButtonItem from "../ButtonItem/ButtonItem.jsx";

const ButtonList = (props) => {
  return (
    <ButtonListContainer>
      <ButtonListWrapper>
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
        <ButtonItem title="TmaxANC" description="상세설명 상세설명" />
      </ButtonListWrapper>
    </ButtonListContainer>
  );
};

export default ButtonList;
