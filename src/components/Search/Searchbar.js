import React, { useState } from "react";
import {
  Search,
  SearchContainer,
  SearchTitle,
  SearchInputForm,
  SearchIcon,
  SearchInput,
} from "./SearchbarElements";

const Searchbar = (props) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Search>
      <SearchContainer>
        <SearchTitle>다양한 고객센터 앱을 검색해 보세요</SearchTitle>
        <SearchInputForm>
          <SearchIcon />
          <SearchInput
            value={value}
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          ></SearchInput>
        </SearchInputForm>
      </SearchContainer>
    </Search>
  );
};

export default Searchbar;
