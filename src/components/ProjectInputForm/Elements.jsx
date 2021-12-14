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

export const Form = styled.form`
  width: 430px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 48px;
`;

export const Graphic = styled.div`
  width: 508px;
  height: 100%;
  background: #000;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProgressBar = styled.div`
  width: 300px;
  height: 8px;
  background: #000;
  margin-top: 45px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 20px;
  color: #1e1f21;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #5f6368;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #1e1f21;
`;

export const Input = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #a7acb1;
  border-radius: 4px;
  padding-left: 12px;
`;

export const ImgUpload = styled.div`
  width: 320px;
  height: 71px;
  background: #f8f9f9;
  border: 1px solid #a7acb1;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 320px;
  height: 40px;
  background: #1e1f21;
  border-radius: 4px;
  color: #fff;
  border: none;
  outline: none;
  margin-top: 40px;
`;
