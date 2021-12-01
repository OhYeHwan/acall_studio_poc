import React, { useRef, useEffect, useCallback } from "react";

import {
  AccountContainer,
  AccountWrapper,
  AccountAvartar,
  AccountInfo,
  AccountName,
  AccountEmail,
  AccountButtons,
  AccountButton,
  Background,
} from "./AccountModalElement.jsx";

const AccountModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <AccountContainer>
            <AccountWrapper>
              <AccountAvartar>T</AccountAvartar>
              <AccountInfo>
                <AccountName>YeHwan Oh</AccountName>
                <AccountEmail>yehwan_oh@tmax.co.kr</AccountEmail>
              </AccountInfo>
            </AccountWrapper>
            <AccountButtons>
              <AccountButton to="/" onClick={() => setShowModal(false)}>
                계정설정
              </AccountButton>
              <AccountButton to="/" onClick={() => setShowModal(false)}>
                도움말
              </AccountButton>
            </AccountButtons>
            <AccountButton to="/" onClick={() => setShowModal(false)}>
              로그아웃
            </AccountButton>
          </AccountContainer>
        </Background>
      ) : null}
    </>
  );
};

export default AccountModal;
