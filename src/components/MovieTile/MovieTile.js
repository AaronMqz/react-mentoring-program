import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Movie from "./MovieTile.styled";
import ContextMenu from "../ContextMenu/ContextMenu";

const MovieTile = ({ movie, handleClick }) => {
  const { image_url, movie_name, release_year, genres } = movie;
  const [itemHover, setItemHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  return (
    <>
      <Movie.Card
        onMouseEnter={() => setItemHover(true)}
        onMouseLeave={() => setItemHover(false)}
      >
        <Movie.Poster
          alt={movie_name}
          src={image_url}
          onClick={() => handleClick(movie)}
        />
        <Movie.MenuIcon
          hover={itemHover}
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
        >
          {menuHover ? (
            <ContextMenu movie={movie}></ContextMenu>
          ) : (
            <FontAwesomeIcon icon={faEllipsisV} />
          )}
        </Movie.MenuIcon>
        <Movie.Content>
          <Movie.TitleContent>
            <Movie.Title>{movie_name}</Movie.Title>
            <Movie.Year>{release_year}</Movie.Year>
          </Movie.TitleContent>
          <Movie.Tagline>{genres.toString().replace(",", " & ")}</Movie.Tagline>
        </Movie.Content>
      </Movie.Card>
    </>
  );
};

export default MovieTile;
