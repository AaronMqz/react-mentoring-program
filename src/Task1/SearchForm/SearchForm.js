import React from "react";
import { useRef } from "react";
import { SearchFormStyled } from "./SearchForm.styled";

const SearchFormComponent = ({ searchQuery, onSearch }) => {
  const { Input, Content, Button } = SearchFormStyled;
  const refInput = useRef("");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  };

  return (
    <Content>
      <Input
        ref={refInput}
        defaultValue={searchQuery}
        onKeyDown={keyPress}
        placeholder={"What do you want to watch?"}
      />
      <Button onClick={() => onSearch(refInput.current.value)}>SEARCH</Button>
    </Content>
  );
};

export default SearchFormComponent;
