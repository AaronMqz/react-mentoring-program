import React, { useState } from "react";
import { GenreStyled } from "./GenreSelect.styled";

const GenreSelect = ({ genreList, currentSelected, onSelect }) => {
  const { Container, Content, Label } = GenreStyled;
  const [genre, setGenre] = useState(currentSelected); // ** Maybe this is not needed for task 1, just added to highlight the current gender

  return (
    <Container>
      <Content>
        {genreList.map((item, index) => {
          return (
            <Label
              key={index}
              id={item}
              active={genre === item ? true : false}
              onClick={(e) => {
                setGenre(e.target.id); // ** Maybe this is not needed for task 1, just added to highlight the current gender
                onSelect(e.target.id);
              }}
            >
              {item.toUpperCase()}
            </Label>
          );
        })}
      </Content>
    </Container>
  );
};

export default GenreSelect;
