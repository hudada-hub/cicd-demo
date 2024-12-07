import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders initial count", () => {
    const { getByText } = render(<App />);
    expect(getByText("Count: 0")).toBeDefined();
  });

  it("increments count when increment button is clicked", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Increment"));
    expect(getByText("Count: 1")).toBeDefined();
  });

  it("resets count when reset button is clicked", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Increment"));
    fireEvent.click(getByText("Increment"));
    fireEvent.click(getByText("Reset"));
    expect(getByText("Count: 0")).toBeDefined();
  });
});
