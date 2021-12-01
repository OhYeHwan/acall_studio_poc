import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavInfo,
  NavButton,
  NavVerticalLine,
  NavAvartar,
} from "./NavbarElements";

const Navbar = () => {
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
          <NavAvartar>T</NavAvartar>
        </NavInfo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
