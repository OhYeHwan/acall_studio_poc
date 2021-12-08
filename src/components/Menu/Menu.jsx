import React, { useRef, useEffect, useCallback } from "react";
import { MenuContainer, MenuWrapper } from "./MenuElements";

const Menu = ({ openModal, setOpenModal, coordinate }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(false);
      }
    },
    [setOpenModal, openModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <MenuContainer ref={modalRef} onClick={closeModal} openModal={openModal}>
      <MenuWrapper top={coordinate[0]} left={coordinate[1]} />
    </MenuContainer>
  );
};

export default Menu;
