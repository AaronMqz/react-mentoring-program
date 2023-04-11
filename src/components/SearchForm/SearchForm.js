import React from "react";
import { useRef } from "react";
import { SearchFormStyled } from "./SearchForm.styled";

const SearchFormComponent = ({ searchQuery, onChange }) => {
  const { Input, Content, Button } = SearchFormStyled;
  const refInput = useRef("");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onChange(e.target.value);
    }
  };

  return (
    <Content>
      <Input
        aria-label="search-form"
        ref={refInput}
        defaultValue={searchQuery}
        onKeyDown={keyPress}
        placeholder={"What do you want to watch?"}
      />
      <Button
        aria-label="btn-search"
        onClick={() => onChange(refInput.current.value)}
      >
        SEARCH
      </Button>
    </Content>
  );
};

export default SearchFormComponent;
