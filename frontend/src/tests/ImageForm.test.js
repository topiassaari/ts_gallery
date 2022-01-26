import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageForm from "../components/ImageForm";
import { axe } from "jest-axe";

it("should not have basic accessibility issues", async () => {
  const component = render(<ImageForm />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

let component;
let mockHandler;
describe("test form", () => {
  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(<ImageForm handleSubmit={mockHandler} />);
  });
  test("updates url", () => {
    const url = component.container.querySelector("#formUrl");
    fireEvent.change(url, {
      target: { value: "https://test.com" },
    });
    expect(url.value).toBe("https://test.com");
  });
  test("updates desc", () => {
    const desc = component.container.querySelector("#formDesc");
    fireEvent.change(desc, {
      target: { value: "description" },
    });
    expect(desc.value).toBe("description");
  });
  test("updates year", () => {
    const year = component.container.querySelector("#formYear");
    fireEvent.change(year, {
      target: { value: 2018 },
    });
    expect(year.value).toBe("2018");
  });
  test("submits new image", () => {
    const form = component.container.querySelector("form");

    fireEvent.change(component.container.querySelector("#formUrl"), {
      target: { value: "https://test.com" },
    });
    fireEvent.change(component.container.querySelector("#formDesc"), {
      target: { value: "description" },
    });
    fireEvent.change(component.container.querySelector("#formYear"), {
      target: { value: 2018 },
    });
    fireEvent.submit(form);
    expect(mockHandler.mock.calls[0][0]).toEqual({
      desc: "description",
      url: "https://test.com",
      year: "2018",
    });
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
