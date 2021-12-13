import React, { useRef, useEffect, useCallback } from "react";
import {
  BackGround,
  UploadCard,
  UploadCardTitle,
  UploadButtonWrapper,
  UploadButton,
} from "./UploadModalElements.jsx";

const UploadModal = ({
  uploadState,
  setUploadState,
  switchModal,
  setSwitchModal,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSwitchModal(false);
    }
  };

  const onChangeUploadState = () => {
    setUploadState(!uploadState);
    setSwitchModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && switchModal) {
        setSwitchModal(false);
      }
    },
    [switchModal, setSwitchModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <BackGround ref={modalRef} switchModal={switchModal} onClick={closeModal}>
      {uploadState ? (
        <UploadCard>
          <UploadCardTitle>스토어 업로드를 해제하시겠습니까?</UploadCardTitle>
          <UploadButtonWrapper>
            <UploadButton primary onClick={onChangeUploadState}>
              업로드 해제하기
            </UploadButton>
            <UploadButton onClick={() => setSwitchModal(false)}>
              취소
            </UploadButton>
          </UploadButtonWrapper>
        </UploadCard>
      ) : (
        <UploadCard>
          <UploadCardTitle>스토어 업로드를 진행하시겠습니까?</UploadCardTitle>
          <UploadButtonWrapper>
            <UploadButton primary onClick={onChangeUploadState}>
              업로드하기
            </UploadButton>
            <UploadButton onClick={() => setSwitchModal(false)}>
              취소
            </UploadButton>
          </UploadButtonWrapper>
        </UploadCard>
      )}
    </BackGround>
  );
};

export default UploadModal;
