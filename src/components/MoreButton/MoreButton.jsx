import React from "react";
import {
  MoreButtonContainer,
  MoreButtonWrapper,
  MoreButtonDot,
} from "./MoreButtonElements.jsx";

const MoreButton = ({ openModal, onClick }) => {
  return (
    <MoreButtonContainer openModal={openModal} onClick={onClick}>
      <MoreButtonWrapper>
        <MoreButtonDot />
        <MoreButtonDot />
        <MoreButtonDot />
      </MoreButtonWrapper>
    </MoreButtonContainer>
  );
};
export default MoreButton;
