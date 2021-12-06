import React from "react";
import {
  ProjectSec,
  ProjectContainer,
  ProjectInfo,
  ProjectInfoTitle,
  ProjectInfoDescription,
  ProjectListContainer,
} from "./ProjectSectionElement.jsx";
import { ProjectItemList } from "../";

const ProjectSection = (props) => {
  return (
    <ProjectSec>
      <ProjectContainer>
        <ProjectInfo>
          <ProjectInfoTitle>나의 Acall 프로젝트</ProjectInfoTitle>
          <ProjectInfoDescription>
            프로젝트 대시보드를 확인하려면 편집할 Acall 프로젝트를 선택하세요
          </ProjectInfoDescription>
        </ProjectInfo>
        <ProjectListContainer>
          <ProjectItemList />
        </ProjectListContainer>
      </ProjectContainer>
    </ProjectSec>
  );
};

export default ProjectSection;
