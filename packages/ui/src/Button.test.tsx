import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeDefined();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    const { getByTestId } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByTestId("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct classes for primary variant", () => {
    const { getByTestId } = render(<Button variant="primary">Primary</Button>);
    expect(getByTestId("button").className).toContain("bg-blue-500");
  });

  it("applies correct classes for secondary variant", () => {
    const { getByTestId } = render(
      <Button variant="secondary">Secondary</Button>,
    );
    expect(getByTestId("button").className).toContain("bg-gray-200");
  });
});
