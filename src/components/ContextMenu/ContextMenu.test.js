import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ContextMenuComponent from "./ContextMenu";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("ContextMenu Tests:", () => {
  test("1. That component is visible.", () => {
    render(<ContextMenuComponent />);
    const text = screen.getByText("Edit");
    expect(text).toBeInTheDocument();
  });

  it("2. Snapshot renders correctly", () => {
    const tree = renderer.create(<ContextMenuComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
