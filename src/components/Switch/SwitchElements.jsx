import styled from "styled-components";

export const SwitchContainer = styled.div`
  margin-right: 28px;
  width: 28px;
  height: 17px;
  background: ${({ checked }) => (checked ? "#1890FF" : "#9fb0bf")};
  border-radius: 16px;
  transition: all 0.5s ease-in-out;
`;

export const SwitchButton = styled.div`
  margin: 2px;
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 50%;
  transform: ${({ checked }) =>
    checked ? "translateX(100%)" : "translateX(0%)"};
  transition: all 0.5s ease-in-out;
`;
