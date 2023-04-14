import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SearchFormComponent from "./SearchForm";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("SearchForm Tests:", () => {
  console.log("searForm");
  const searchFormSetup = (initialValue, mockOnClick) => {
    const utils = render(
      <SearchFormComponent
        searchQuery={initialValue}
        onChange={(search) => mockOnClick(search)}
      />
    );
    const input = screen.getByLabelText("search-form");
    const button = screen.getByLabelText("btn-search");
    return {
      input,
      button,
      ...utils,
    };
  };

  test("1. That component renders an input with the value equal to initial value passed in props", () => {
    searchFormSetup("Avengers", null);
    expect(screen.getByDisplayValue("Avengers")).toBeInTheDocument();
  });

  test("2. That after typing to the input and a 'click' event on the Submit button, the 'onChange' prop is called with proper value", () => {
    const typedValue = "Black Panter";
    const mockOnClick = jest.fn();
    const { input, button } = searchFormSetup("Avengers", mockOnClick);

    fireEvent.change(input, { target: { value: typedValue } });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledWith(typedValue);
  });

  test("3. That after typing to the input and pressing Enter key, the 'onChange' prop is called with proper value", () => {
    const mockOnClick = jest.fn();
    const { input } = searchFormSetup("Avengers", mockOnClick);

    fireEvent.change(input, { target: { value: "avenger 2" } });
    fireEvent.keyDown(input, { keyCode: 13 });

    expect(mockOnClick).toHaveBeenCalledWith("avenger 2");
  });

  it("4. Snapshot renders correctly", () => {
    const tree = renderer
      .create(<SearchFormComponent searchQuery={"Avengers"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
