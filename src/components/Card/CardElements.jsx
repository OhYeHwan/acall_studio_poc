import styled from "styled-components";

export const CardItem = styled.div`
  position: relative;
  width: 160px;
  height: 230px;
  background-color: #fff;
  border-radius: 4px;
`;

export const CardIcon = styled.div`
  position: relative;
  margin: 15px;
  width: 130px;
  height: 130px;
  background: #d6dae0;
`;

export const CardInfo = styled.div`
  position: relative;
  margin: 20px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: #1e1f21;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  color: #5f6368;
`;
