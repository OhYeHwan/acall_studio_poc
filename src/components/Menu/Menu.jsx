import React, { useRef, useEffect, useCallback } from "react";
import {
  MenuContainer,
  MenuWrapper,
  MenuItemList,
  MenuItem,
  MenuItemTitle,
} from "./MenuElements";
import {
  FaEye,
  FaPen,
  FaClone,
  FaPlusCircle,
  FaTrashAlt,
} from "react-icons/fa";

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
      <MenuWrapper top={coordinate[0]} left={coordinate[1]}>
        <MenuItemList>
          <MenuItem>
            <FaEye />
            <MenuItemTitle>프로젝트 미리보기</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <FaPen />
            <MenuItemTitle>프로젝트 이름변경</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <FaClone />
            <MenuItemTitle>프로젝트 복제</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <FaPlusCircle />
            <MenuItemTitle>사용자 초대</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <FaTrashAlt />
            <MenuItemTitle>휴지통으로 보내기</MenuItemTitle>
          </MenuItem>
        </MenuItemList>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
