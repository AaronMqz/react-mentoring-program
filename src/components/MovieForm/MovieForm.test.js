import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MovieForm from "./MovieForm";
import { dummyMovieState } from "../../utils";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("MovieForm Tests:", () => {
  test("1. That component is visible.", () => {
    render(
      <MovieForm.Default titleForm="DEFAULT TITLE" movie={dummyMovieState} />
    );
    const movieName = screen.getByPlaceholderText("Title");
    expect(movieName).toBeInTheDocument();
  });

  it("2. Snapshot renders correctly", () => {
    const tree = renderer
      .create(
        <MovieForm.Default titleForm="DEFAULT TITLE" movie={dummyMovieState} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
