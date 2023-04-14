import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";
import { GenresList } from "../../utils";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("GenreSelect Tests:", () => {
  test("1. That component renders all genres passed in props.", () => {
    render(<GenreSelect genreList={GenresList} />);
    const list = screen.getAllByLabelText("genre-list");
    const genres = list.map((i) => i.textContent);
    expect(genres).toEqual(GenresList);
  });

  test("2. That component highlights a selected genre passed in props.", () => {
    render(<GenreSelect genreList={GenresList} currentSelected={"HORROR"} />);
    const element = screen.getByText("HORROR");
    const styles = getComputedStyle(element);
    const styleActive = "3px solid #f65261"; // GenreSelect.styled.js - line 28
    expect(styles.borderBottom).toBe(styleActive);
  });

  test("3. That after a click event on a genre button component calls 'onChange' callback and passes correct genre in arguments", () => {
    const mockOnClick = jest.fn();

    render(
      <GenreSelect
        genreList={GenresList}
        currentSelected={"HORROR"}
        onChange={(selected) => mockOnClick(selected)}
      />
    );
    const element = screen.getByText("CRIME");
    fireEvent.click(element);

    expect(mockOnClick).toHaveBeenCalledWith("CRIME");
  });

  it("4. Snapshot renders correctly", () => {
    const tree = renderer
      .create(<GenreSelect genreList={GenresList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
