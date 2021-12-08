import React from "react";
import { BackGround, CloseButton, Container } from "./Elements";
import { FaTimes } from "react-icons/fa";

const ProjectInputForm = ({ inputForm, onClose }) => {
  return (
    <BackGround inputForm={inputForm}>
      <Container></Container>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
    </BackGround>
  );
};

export default ProjectInputForm;
