import React, { useState } from "react";
import {
  ProjectContainer,
  ProjectWrapper,
} from "./ProjectItemListElements.jsx";
import { ProjectItem, ProjectPlus, ProjectInputForm } from "../";

const ProjectItemList = (props) => {
  const [inputForm, setInputForm] = useState(false);

  const onToggle = () => {
    setInputForm(!inputForm);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <ProjectPlus onClick={onToggle} />
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
      <ProjectInputForm inputForm={inputForm} onClose={onToggle} />
    </>
  );
};

export default ProjectItemList;
