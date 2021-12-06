import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const CardListContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: transparent;
`;

export const CardListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardListLeftButton = styled.button`
  position: absolute;
  top: 45%;
  left: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  color: #3e3e3e;
  transform: translateX(-50%);
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: pink;
  }
`;

export const CardListRightButton = styled.button`
  position: absolute;
  top: 45%;
  right: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  outline: none;
  color: #3e3e3e;
  transform: translateX(50%);
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: pink;
  }
`;

export const LeftIcon = styled(FaAngleLeft)`
  margin: 0px;
  border: none;
`;

export const RightIcon = styled(FaAngleRight)`
  margin: 0px;
  border: none;
`;

export const CardListDisplay = styled.div`
  width: 1100px;
  height: 230px;
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
