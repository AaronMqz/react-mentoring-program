import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

describe("Counter Tests:", () => {
  test("1. That component renders initial value provided in props", () => {
    render(<Counter initialValue={100} />);
    const result = screen.getByText(100);
    expect(result).toBeInTheDocument();
  });

  test("2. That a click event on 'decrement' button decrements the displayed value", () => {
    render(<Counter initialValue={100} />);
    const button = screen.getByText("Decrement");
    fireEvent.click(button);
    expect(screen.getByText(99)).toBeInTheDocument();
  });

  test("3. That a click event on 'increment' button decrements the displayed value", () => {
    render(<Counter initialValue={100} />);
    const button = screen.getByText("Increment");
    fireEvent.click(button);
    expect(screen.getByText(101)).toBeInTheDocument();
  });
});
