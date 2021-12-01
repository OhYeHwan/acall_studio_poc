import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavInfo,
  NavButton,
  NavVerticalLine,
  NavAvartar,
} from "./NavbarElements.jsx";
import { AccountModal } from "../index";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          Acall Studio
        </NavLogo>
        <NavInfo>
          <NavButton to="/myproject">My Acall</NavButton>
          <NavVerticalLine />
          <NavAvartar onClick={openModal}>T</NavAvartar>
          <AccountModal showModal={showModal} setShowModal={setShowModal} />
        </NavInfo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
