import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import DetailComponent from "./MovieDetails";
import { movieMockData } from "../../utils";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("MovieDetails Tests:", () => {
  test("1. That component renders movie details.", () => {
    render(<DetailComponent movie={movieMockData} />);
    const movieName = screen.getByText(movieMockData.movie_name);
    expect(movieName).toBeInTheDocument();
  });

  it("2. Snapshot renders correctly", () => {
    const tree = renderer
      .create(<DetailComponent movie={movieMockData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
