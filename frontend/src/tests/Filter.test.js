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
  // test("active state is removed after clicking again", () => {
  //   const filter = component.getAllByRole("button");
  //   expect(filter[0]).toHaveTextContent(2022);
  //   fireEvent.click(filter[0]);
  //   expect(component.container.querySelector(".yearFilters")).toHaveStyle(
  //     "color:black"
  //   );
  //   fireEvent.click(filter[0]);
  //   console.log(prettyDOM());
  //   expect(component.container.querySelector(".yearFilters")).toHaveStyle(
  //     "color:gray"
  //   );
  // });
});
