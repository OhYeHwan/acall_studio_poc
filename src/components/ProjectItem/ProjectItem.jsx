import React from "react";
import {
  ProjectItemContainer,
  ProjectIconContainer,
  ProjectIcon,
  ProjectInfo,
  ProjectHeader,
  ProjectTitle,
  ProjectSwitch,
  ProjectDescription,
  ProjectState,
} from "./ProjectItemElements.jsx";

const ProjectItem = ({ title, description, date }) => {
  return (
    <ProjectItemContainer>
      <ProjectIconContainer>
        <ProjectIcon></ProjectIcon>
      </ProjectIconContainer>
      <ProjectInfo>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectSwitch></ProjectSwitch>
        </ProjectHeader>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectState>{date}</ProjectState>
      </ProjectInfo>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
