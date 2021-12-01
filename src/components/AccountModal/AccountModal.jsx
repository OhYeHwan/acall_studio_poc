import React, { useRef, useEffect, useCallback } from "react";
import Avatar from "../Avatar/Avatar.jsx";

import {
  AccountContainer,
  AccountWrapper,
  AccountInfo,
  AccountName,
  AccountEmail,
  AccountButtons,
  AccountButton,
  Background,
} from "./AccountModalElement.jsx";

const AccountModal = ({ user, showModal, setShowModal }) => {
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
              <Avatar user={user} />
              <AccountInfo>
                <AccountName>{user.name}</AccountName>
                <AccountEmail>{user.email}</AccountEmail>
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
