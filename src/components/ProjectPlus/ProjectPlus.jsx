import React from "react";
import {
  ProjectPlusContainer,
  ProjectPlusWrapper,
  ProjectPlusIcon,
} from "./ProjectPlusElements.jsx";

const ProjectPlus = ({ onClick }) => {
  return (
    <ProjectPlusContainer onClick={onClick}>
      <ProjectPlusWrapper>
        <ProjectPlusIcon />
      </ProjectPlusWrapper>
    </ProjectPlusContainer>
  );
};

export default ProjectPlus;
