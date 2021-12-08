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
import { Switch, MoreButton, Menu, UploadModal } from "../index.js";

const ProjectItem = ({ title, description, date }) => {
  const [openModal, setOpenModal] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const [switchModal, setSwitchModal] = useState(false);
  const [coordinate, setCoordinate] = useState([0, 0]);

  const onClick = (e) => {
    setCoordinate([
      e.nativeEvent.clientY - e.nativeEvent.offsetY + 35,
      e.nativeEvent.clientX - e.nativeEvent.offsetX,
    ]);
    setOpenModal(!openModal);
  };

  const onClickSwitch = () => {
    setSwitchModal(!switchModal);
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
              <Switch onClickSwitch={onClickSwitch} uploadState={uploadState} />
            </SwitchWrapper>
          </ProjectHeader>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectState>{date}</ProjectState>
        </ProjectInfo>
        <UploadModal
          uploadState={uploadState}
          setUploadState={setUploadState}
          switchModal={switchModal}
          setSwitchModal={setSwitchModal}
        />
      </ProjectItemContainer>
    </>
  );
};

export default ProjectItem;
