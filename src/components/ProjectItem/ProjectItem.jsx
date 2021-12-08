import React, { useState } from "react";
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
  HoverContainer,
  ProjectSelectButton,
} from "./ProjectItemElements.jsx";
import { Switch, MoreButton, Menu } from "../index.js";

const ProjectItem = ({ title, description, date }) => {
  const [openModal, setOpenModal] = useState(false);
  const [coordinate, setCoordinate] = useState([0, 0]);

  const onClick = (e) => {
    setCoordinate([
      e.nativeEvent.clientY - e.nativeEvent.offsetY + 35,
      e.nativeEvent.clientX - e.nativeEvent.offsetX,
    ]);
    setOpenModal(!openModal);
  };

  return (
    <>
      <ProjectItemContainer>
        <ProjectIconContainer>
          <HoverContainer openModal={openModal}>
            <MoreButton openModal={openModal} onClick={onClick} />
            <ProjectSelectButton>프로젝트 선택</ProjectSelectButton>
          </HoverContainer>
          <ProjectIcon></ProjectIcon>
        </ProjectIconContainer>
        <Menu
          openModal={openModal}
          setOpenModal={setOpenModal}
          coordinate={coordinate}
        />
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
    </>
  );
};

export default ProjectItem;
