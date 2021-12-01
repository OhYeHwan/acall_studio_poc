import React from "react";
import {
  AccountContainer,
  AccountWrapper,
  AccountAvartar,
  AccountInfo,
  AccountName,
  AccountEmail,
  AccountButtons,
  AccountButton,
} from "./AccountModalElement";

const AccountModal = () => {
  return (
    <AccountContainer>
      <AccountWrapper>
        <AccountAvartar>T</AccountAvartar>
        <AccountInfo>
          <AccountName>YeHwan Oh</AccountName>
          <AccountEmail>yehwan_oh@tmax.co.kr</AccountEmail>
        </AccountInfo>
      </AccountWrapper>
      <AccountButtons>
        <AccountButton>계정설정</AccountButton>
        <AccountButton>도움말</AccountButton>
      </AccountButtons>
      <AccountButton>로그아웃</AccountButton>
    </AccountContainer>
  );
};

export default AccountModal;
