import styled from "styled-components";

export const MoreButtonContainer = styled.div`
  position: absolute;
  right: 9px;
  top: 14px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ openModal }) =>
    openModal ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)"};
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const MoreButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButtonDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  margin: 1px;
  z-index: -1;
`;
