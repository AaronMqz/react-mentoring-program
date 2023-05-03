import React, { useState } from "react";
import Form from "./MovieForm.styled";
import DropDown from "../DropDown/DropDown";
import { GenresList } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Default = ({ titleForm, movie, handleSubmit, handleReset }) => {
  const [newMovieState, setNewMovieState] = useState(movie);

  const {
    movie_name,
    release_date,
    image_url,
    rating,
    genres,
    duration,
    description,
  } = newMovieState;

  const handleChange = (e) => {
    setNewMovieState({
      ...newMovieState,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeGenres = (items) => {
    setNewMovieState({
      ...newMovieState,
      genres: items,
    });
  };

  return (
    <Form.Content>
      <Form.Title>{titleForm}</Form.Title>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>TITLE</Form.Label>
          <Form.Input
            name={"title"}
            placeholder={"Title"}
            onChange={handleChange}
            value={movie_name}
            type="text"
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RELEASE DATE</Form.Label>
          <Form.Input
            name={"release_date"}
            placeholder={"Release Date"}
            onChange={handleChange}
            value={release_date}
            type="date"
          />
          <Form.Icon>
            <FontAwesomeIcon icon={faCalendarDays} color={"#f64261"} />
          </Form.Icon>
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>MOVIE URL</Form.Label>
          <Form.Input
            type="text"
            name={"image_url"}
            placeholder={"https://"}
            onChange={handleChange}
            value={image_url}
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RATING</Form.Label>
          <Form.Input
            type="text"
            name={"rating"}
            placeholder={"Rating"}
            onChange={handleChange}
            value={rating}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>GENRE</Form.Label>
          <DropDown
            selectedItems={genres}
            optionList={GenresList}
            onChange={handleChangeGenres}
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RUNTIME</Form.Label>
          <Form.Input
            name={"duration"}
            placeholder={"Minutes"}
            onChange={handleChange}
            value={duration}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>OVERVIEW</Form.Label>
          <Form.TextArea
            name="description"
            placeholder={"Movie Description"}
            onChange={handleChange}
            value={description}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Footer>
        <Form.ButtonSecondary onClick={handleReset}>RESET</Form.ButtonSecondary>
        <Form.ButtonPrimary onClick={handleSubmit}>SUBMIT</Form.ButtonPrimary>
      </Form.Footer>
    </Form.Content>
  );
};

const Delete = () => {
  return (
    <Form.Content>
      <Form.Title>DELETE MOVIE</Form.Title>
      <Form.Message>Are you sure you want to delete this movie?</Form.Message>
      <Form.Footer>
        <Form.ButtonPrimary>CONFIRM</Form.ButtonPrimary>
      </Form.Footer>
    </Form.Content>
  );
};

export default {
  Default,
  Delete,
};
