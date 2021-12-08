import styled from "styled-components";

export const BackGround = styled.div`
  display: ${({ switchModal }) => (switchModal ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

export const UploadCard = styled.div`
  width: 430px;
  height: 182px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadCardTitle = styled.p`
  font-size: 20px;
  color: #1e1f21;
`;

export const UploadButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const UploadButton = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 6px;
  background: ${({ primary }) => (primary ? "#D6DAE0" : "#1e1f21")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  border: none;
  outline: none;
  margin: 5px;

  &:hover {
    background: ${({ primary }) => (primary ? "#89c797dc" : "#89c797dc")};
    color: ${({ primary }) => (primary ? "#fff" : "#000")};
  }
`;
