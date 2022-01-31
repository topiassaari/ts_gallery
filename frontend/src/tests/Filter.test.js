import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
//import { prettyDOM } from "@testing-library/dom";

it("should not have basic accessibility issues", async () => {
  const component = render(<Filter />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

describe("the basics", () => {
  let component;
  let mockHandler;
  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(<Filter byYear={mockHandler} />);
  });
  test("onclick handler works", () => {
    const filter = component.getAllByRole("button");
    expect(filter[0]).toHaveTextContent(2022);
    fireEvent.click(filter[0]);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("filter changes color when clicked", () => {
    const filter = component.getAllByRole("button");
    expect(filter[0]).toHaveTextContent(2022);
    fireEvent.click(filter[0]);
    expect(component.container.querySelector(".yearFilters")).toHaveStyle(
      "text-decoration:underline;"
    );
  });
});

describe("also with keyboard", () => {
  let component;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(<Filter byYear={mockHandler} />);
  });
  test("select filter with enter", () => {
    const filters = component.getAllByRole("button");
    fireEvent.keyDown(filters[0], { key: "Enter", keyCode: 13 });
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
