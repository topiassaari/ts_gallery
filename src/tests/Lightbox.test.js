import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Lightbox from "../components/Lightbox";
import { axe } from "jest-axe";
import { testData } from "./utils";

it("should not have basic accessibility issues", async () => {
  const component = render(<Lightbox img={testData[0]} content={testData} />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

describe("the basics", () => {
  test("component visible", () => {
    const component = render(<Lightbox img={testData[0]} content={testData} />);
    expect(component.container.querySelector("#lightbox")).toBeInTheDocument();
  });
  test("hidden if no content", () => {
    const component = render(<Lightbox />);
    expect(
      component.container.querySelector("#lightbox")
    ).not.toBeInTheDocument();
  });
});

describe("lightbox buttons work", () => {
  let component;
  let mockHandler;
  let next;
  let prev;
  let close;
  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(
      <Lightbox
        img={testData[0]}
        content={testData}
        close={mockHandler}
        handlePrev={mockHandler}
        handleNext={mockHandler}
      />
    );
    prev = component.getByText("prev");
    next = component.getByText("next");
    close = component.getByText("x");
  });
  test("close button", () => {
    expect(close).toBeDefined();
    fireEvent.click(close);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("next button goes forward and prev button goes back", () => {
    fireEvent.click(next);
    expect(component.img === testData[1]);
    fireEvent.click(prev);
    expect(component.img === testData[0]);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("prev button disabled in first", () => {
    const prev = component.getByText("prev");
    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();
  });
});

describe("keyboard controls work", () => {
  test("keyboard ArrowRight goes to next img", () => {
    const mockHandler = jest.fn();
    const component = render(
      <Lightbox img={testData[0]} content={testData} handleNext={mockHandler} />
    );
    fireEvent.keyDown(component.container, {
      key: "ArrowRight",
      keyCode: 39,
    });
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("keyboard ArrowLeft goes to prew img", () => {
    const mockHandler = jest.fn();
    const component = render(
      <Lightbox img={testData[1]} content={testData} handlePrev={mockHandler} />
    );
    fireEvent.keyDown(component.container, { key: "ArrowLeft", keyCode: 37 });
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("keyboard ArrowLeft doesn't go anywhere if button disabled", () => {
    const mockHandler = jest.fn();
    const component = render(
      <Lightbox img={testData[0]} content={testData} handlePrev={mockHandler} />
    );
    fireEvent.keyDown(component.container, { key: "ArrowLeft", keyCode: 37 });
    expect(mockHandler.mock.calls).toHaveLength(0);
    expect(component.container.querySelector("#lightbox")).toBeVisible();
  });
  test("keyboard ArrowRight doesn't go anywhere if button disabled", () => {
    const mockHandler = jest.fn();
    const component = render(
      <Lightbox img={testData[2]} content={testData} handleNext={mockHandler} />
    );
    fireEvent.keyDown(component.container, { key: "ArrowRight", keyCode: 39 });
    expect(mockHandler.mock.calls).toHaveLength(0);
    expect(component.container.querySelector("#lightbox")).toBeVisible();
  });
});
