import React from "react";
import {
  BackGround,
  CloseButton,
  Container,
  Form,
  Graphic,
  ProgressBar,
  Title,
  Description,
  Label,
  InputContainer,
  Input,
  ImgUpload,
  Button,
} from "./Elements";
import { FaTimes } from "react-icons/fa";

const ProjectInputForm = ({ inputForm, onClose }) => {
  return (
    <BackGround inputForm={inputForm}>
      <Container>
        <Form>
          <ProgressBar />
          <Title>Acall프로젝트 기본 정보 설정</Title>
          <Description>
            프로젝트의 앱이름과 설명 앱 아이콘 썸네일을 설정해주세요.
          </Description>
          <InputContainer>
            <Label>앱 이름</Label>
            <Input placeholder="Team Name"></Input>
          </InputContainer>
          <InputContainer>
            <Label>앱 상세설명</Label>
            <Input placeholder="Team Name"></Input>
          </InputContainer>
          <InputContainer>
            <Label>앱 아이콘 이미지</Label>
            <ImgUpload></ImgUpload>
          </InputContainer>
          <Button>다음</Button>
        </Form>
        <Graphic></Graphic>
      </Container>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
    </BackGround>
  );
};

export default ProjectInputForm;
