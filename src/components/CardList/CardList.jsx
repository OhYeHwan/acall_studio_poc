import React from "react";
import {
  CardListContainer,
  CardListWrapper,
  CardListRightButton,
  CardListLeftButton,
  LeftIcon,
  RightIcon,
  CardListDisplay,
} from "./CardListElements";
import { Card } from "../";

const CardList = (props) => {
  return (
    <CardListContainer>
      <CardListWrapper>
        <CardListLeftButton>
          <LeftIcon />
        </CardListLeftButton>
        <CardListDisplay>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
          <Card title="TmaxANC" description="상세설명 상세설명"></Card>
        </CardListDisplay>
        <CardListRightButton>
          <RightIcon />
        </CardListRightButton>
      </CardListWrapper>
    </CardListContainer>
  );
};

export default CardList;
