import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  width: 400px;
  height: 320px;
  border-radius: 10px;
  background: #fff;
`;

export const ProjectIconContainer = styled.div`
  width: 100%;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dce4ed;
`;

export const ProjectIcon = styled.div`
  width: 154px;
  height: 154px;
  background: #d6dae0;
  border-radius: 6px;
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

export const ProjectSwitch = styled.div`
  margin-right: 28px;
  width: 28px;
  height: 16px;
  background: #9fb0bf;
  border-radius: 16px;
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
