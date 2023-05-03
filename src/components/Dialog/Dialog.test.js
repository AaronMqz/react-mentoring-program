import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import DialogComponent from "./Dialog";

afterEach(cleanup);

describe("Dialog Tests:", () => {
  test("1. That component is visible.", () => {
    render(<DialogComponent />);
    const close = screen.getByLabelText("close");
    expect(close).toBeInTheDocument();
  });
});
