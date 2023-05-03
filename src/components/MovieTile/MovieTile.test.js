import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MovieTile from "./MovieTile";
import { dummyMovieState } from "../../utils";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("MovieTile Tests:", () => {
  test("1. That component is visible.", () => {
    render(<MovieTile movie={dummyMovieState} />);
    const movieName = screen.getByText(dummyMovieState.movie_name);
    expect(movieName).toBeInTheDocument();
  });

  it("2. Snapshot renders correctly", () => {
    const tree = renderer
      .create(<MovieTile movie={dummyMovieState} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
