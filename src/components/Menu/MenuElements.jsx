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

export const MenuItemList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 20px 16px 20px;
`;

export const MenuItem = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(224, 224, 224, 0.4);
  }
`;

export const MenuItemTitle = styled.h1`
  font-size: 14px;
  color: #1e1f21;
  margin: 4px 0px 4px 8px;
`;
