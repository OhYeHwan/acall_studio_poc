import styled from "styled-components";

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: ${({ inputForm }) => (inputForm ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  transform: translateY(-275px);

  &:hover {
    background-color: #62ca8e;
    color: #fdfdfd;
  }
`;

export const Container = styled.div`
  width: 938px;
  height: 590px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
`;
