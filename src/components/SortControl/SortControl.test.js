import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SortControlComponent from "./SortControl";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("SortControl Tests:", () => {
  test("1. That component is visible.", () => {
    render(<SortControlComponent current={"title"} />);
    const sortBy = screen.getByText("TITLE");
    expect(sortBy).toBeInTheDocument();
  });

  it("2. Snapshot renders correctly", () => {
    const tree = renderer
      .create(<SortControlComponent current={"title"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
