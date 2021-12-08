import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  width: 400px;
  height: 320px;
  border-radius: 10px;
  background: #fff;
`;

export const ProjectIcon = styled.div`
  width: 154px;
  height: 154px;
  background: #d6dae0;
  border-radius: 6px;
`;

export const HoverContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${({ openModal }) => (openModal ? "1" : "0")};
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
`;

export const ProjectSelectButton = styled.button`
  width: 133px;
  height: 36px;
  background: #1e1f21;
  border-radius: 100px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4f3636;
  }
`;

export const ProjectIconContainer = styled.div`
  position: relative;
  width: 100%;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dce4ed;

  &:hover ${HoverContainer} {
    opacity: 1;
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  flex-direction: column;
`;

export const ProjectHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ProjectTitle = styled.h1`
  margin-left: 28px;
  font-weight: 500;
  font-size: 16px;
  color: #1e1f21;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #9a9fa3;
  margin-right: 6px;
`;

export const ProjectDescription = styled.p`
  margin-left: 28px;
  margin-top: 14px;
  font-size: 12px;
  color: #5f6368;
`;

export const ProjectState = styled.p`
  margin-left: 28px;
  margin-top: 4px;
  font-size: 12px;
  color: #5f6368;
`;
