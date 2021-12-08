import styled from "styled-components";

export const MenuContainer = styled.div`
  display: ${({ openModal }) => (openModal ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
`;

export const MenuWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 169px;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
`;
