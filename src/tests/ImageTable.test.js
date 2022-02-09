import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageTable from "../components/ImageTable";
import { axe } from "jest-axe";
import { testData } from "./utils";

describe("accessibility", () => {
  it("should not have basic accessibility issues", async () => {
    const component = render(<ImageTable images={testData} />);
    const results = await axe(component.container);
    expect(results).toHaveNoViolations();
  });
});
describe("ImageTable basics work", () => {
  test("images are rendered as a list", () => {
    const component = render(<ImageTable images={testData} />);
    expect(
      component.container.querySelector("tbody").childElementCount
    ).not.toBe(0);
  });
  test("if no images, table body is empty", () => {
    const component = render(<ImageTable />);
    expect(component.container.querySelector("tbody").childElementCount).toBe(
      0
    );
  });
  test("clicking row opens edit", () => {
    const mockHandler = jest.fn();
    const component = render(
      <ImageTable images={testData} edit={mockHandler} />
    );
    fireEvent.click(component.getByText("Kumpula"));
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0]).toBe[testData[0]];
  });
});
