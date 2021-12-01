import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavInfo,
  NavButton,
  NavVerticalLine,
} from "./NavbarElements.jsx";
import { AccountModal } from "../index";
import Avatar from "../Avatar/Avatar.jsx";

const Navbar = ({ user }) => {
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
          <Avatar user={user} onClick={openModal} />
          <AccountModal
            user={user}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </NavInfo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
