import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
`;

export const AccountContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 27px;
  width: 254px;
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
  padding: 16px 0px 16px 16px;
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0px 14px 14px;
`;

export const AccountName = styled.h1`
  font-style: normal;
  font-weight: bold;
  color: #000;
  font-size: 18px;
  cursor: default;
`;

export const AccountEmail = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #5f6368;
  cursor: default;
`;

export const AccountButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dce4ed;
  border-bottom: 1px solid #dce4ed;
`;

export const AccountButton = styled(Link)`
  width: 100%;
  margin: 16px 0px 16px 24px;
  color: #1e1f21;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: pink;
  }
`;
