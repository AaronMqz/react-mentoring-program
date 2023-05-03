import React from "react";
import Detail from "./MovieDetails.styled";

const DetailComponent = ({ movie }) => {
  const {
    image_url,
    movie_name,
    release_year,
    duration,
    description,
    genres,
    rating,
  } = movie;

  return (
    <>
      <Detail.Container>
        <Detail.Content>
          <Detail.Poster src={image_url} />
          <Detail.Description>
            <Detail.Group>
              <Detail.Title aria-label="movie-name">{movie_name}</Detail.Title>
              <Detail.Rating>{rating}</Detail.Rating>
            </Detail.Group>
            <Detail.SubTilte>
              {genres.toString().replace(",", " & ")}
            </Detail.SubTilte>
            <Detail.Group>
              <Detail.DateAndTime>{release_year}</Detail.DateAndTime>
              <Detail.DateAndTime>{duration}</Detail.DateAndTime>
            </Detail.Group>
            <Detail.Overview>{description}</Detail.Overview>
          </Detail.Description>
        </Detail.Content>
      </Detail.Container>
    </>
  );
};

export default DetailComponent;
