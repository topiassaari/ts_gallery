import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import "@testing-library/jest-dom";
//import { prettyDOM } from "@testing-library/dom";

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
      "color:black"
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
