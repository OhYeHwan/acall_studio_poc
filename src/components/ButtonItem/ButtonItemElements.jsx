import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

export const ButtonItemContainer = styled.div`
  position: relative;
  width: 348px;
  height: 90px;
  background: #fff;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(191, 191, 191, 0.1);
  }
`;

export const ButtonIcon = styled.div`
  margin: 20px;
  width: 60px;
  height: 60px;
  background: #d6dae0;
  border-radius: 12px;
`;

export const ButtonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonTitle = styled.h1`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: 500;
  color: #1e1f21;
`;

export const ButtonDescription = styled.p`
  font-size: 12px;
  color: #5f6368;
`;

export const RightIcon = styled(FaAngleRight)`
  position: absolute;
  right: 24px;
  color: #3e3e3e;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    color: pink;
  }
`;
