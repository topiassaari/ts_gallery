import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import Button from "./Button";
//import { prettyDOM } from "@testing-library/dom";

it("should not have basic accessibility issues", async () => {
  const component = render(<Button variant="submit" />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

describe("the basics", () => {
  test("variant name turns into button text", () => {
    const component = render(<Button variant="submit" />);
    expect(component.getByRole("button")).toHaveTextContent("submit");
  });
  test("exception for add-variant works", () => {
    const component = render(<Button variant="add" />);
    expect(component.getByRole("button")).toHaveTextContent("+");
  });
  test("exception for close-variant works", () => {
    const component = render(<Button variant="close" />);
    expect(component.getByRole("button")).toHaveTextContent("x");
  });
  test("onclick handler works", () => {
    const mockHandler = jest.fn();
    const component = render(<Button variant="submit" onClick={mockHandler} />);
    const button = component.getByRole("button");
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("disabled prop works", () => {
    const mockHandler = jest.fn();
    const component = render(<Button disabled={true} />);
    const button = component.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(0);
  });
});
