import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const ProjectPlusWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: #ebeff4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const ProjectPlusIcon = styled(FaPlus)`
  font-size: 50px;
  color: #1e1f21;
`;

export const ProjectPlusContainer = styled.div`
  width: 400px;
  height: 320px;
  border-radius: 10px;
  background: #f9fbfe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #8fc598;
  }

  &:hover ${ProjectPlusWrapper} {
    background-color: #bcdfc2;
  }

  &:hover ${ProjectPlusIcon} {
    color: #fff;
  }
`;
