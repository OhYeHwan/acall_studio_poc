import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Search = styled.div`
  background-color: #838f9e;
  height: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 158px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTitle = styled.div`
  color: black;
  cursor: default;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const SearchInputForm = styled.div`
  width: 595px;
  height: 40px;
  margin-top: 14px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(FaSearch)`
  margin: 10.5px;
  color: #000;

  &:hover {
    cursor: pointer;
    color: #9a9fa3;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: black;
  margin-right: 10px;

  &::placeholder {
    color: #9a9fa3;
  }
`;
