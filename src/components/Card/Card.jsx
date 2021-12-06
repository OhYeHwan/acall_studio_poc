import React from "react";
import {
  CardItem,
  CardIcon,
  CardInfo,
  CardTitle,
  CardDescription,
} from "./CardElements";

const Card = ({ title, description }) => {
  return (
    <CardItem>
      <CardIcon></CardIcon>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
    </CardItem>
  );
};

export default Card;
