import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
} from "./ProjectItemListElements.jsx";
import { ProjectItem } from "../";

const ProjectItemList = (props) => {
  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <ProjectItem
            title="TmaxANC"
            description="상세설명 상세설명"
            date="2020.10.10"
          />
          <ProjectItem
            title="TmaxANC"
            description="상세설명 상세설명"
            date="2020.10.10"
          />
          <ProjectItem
            title="TmaxANC"
            description="상세설명 상세설명"
            date="2020.10.10"
          />
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectItemList;
