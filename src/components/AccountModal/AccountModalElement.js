import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 294px;
  height: 253px;
  background-color: #fff;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

export const AccountWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountAvartar = styled.div`
  width: 53px;
  height: 53px;
  background: #b4beca;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
`;

export const AccountInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
`;

export const AccountName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

export const AccountEmail = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #5f6368;
`;

export const AccountButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dce4ed;
  border-bottom: 1px solid #dce4ed;
`;

// Link로 변경
export const AccountButton = styled.div`
  width: 100%;
  padding: 16px 0px 16px 24px;
  color: #1e1f21;
  font-weight: 500;
  font-size: 14px;
`;
