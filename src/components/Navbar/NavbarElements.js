import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 50px;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  color: #1e1f21;
  cursor: pointer;
  text-decoration: none;
  font-size: 21px;
  font-weight: normal;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const NavInfo = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;

export const NavButton = styled(Link)`
  background-color: #1e1f21;
  color: #fff;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px 28px 7px 28px;
  font-family: sans-serif;
  margin-right: 14px;
  text-decoration: none;

  &:hover {
    background-color: #b4beca;
    color: black;
  }
`;

export const NavVerticalLine = styled.div`
  background-color: #dce4ed;
  width: 1px;
  height: 18px;
`;

export const NavAvartar = styled.div`
  background-color: #b4beca;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
