import React from "react";
import {
  ProjectItemContainer,
  ProjectIconContainer,
  ProjectIcon,
  ProjectInfo,
  ProjectHeader,
  ProjectTitle,
  ProjectDescription,
  ProjectState,
  SwitchWrapper,
  SwitchTitle,
} from "./ProjectItemElements.jsx";
import { Switch } from "../index.js";

const ProjectItem = ({ title, description, date }) => {
  return (
    <ProjectItemContainer>
      <ProjectIconContainer>
        <ProjectIcon></ProjectIcon>
      </ProjectIconContainer>
      <ProjectInfo>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <SwitchWrapper>
            <SwitchTitle>스토어 업로드</SwitchTitle>
            <Switch />
          </SwitchWrapper>
        </ProjectHeader>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectState>{date}</ProjectState>
      </ProjectInfo>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
