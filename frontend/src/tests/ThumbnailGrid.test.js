import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThumbnailGrid from "../components/ThumbnailGrid";
import { axe } from "jest-axe";
import { testData } from "./utils";

describe("accessibility", () => {
  it("should not have basic accessibility issues", async () => {
    const component = render(<ThumbnailGrid content={testData} />);
    const results = await axe(component.container);
    expect(results).toHaveNoViolations();
  });
});
describe("thumbnailGrid works", () => {
  let component;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(
      <ThumbnailGrid content={testData} openLightbox={mockHandler} />
    );
  });
  test("all thumbnails are visible", () => {
    const thumbnails = component.container.querySelectorAll(".thumbnail");
    expect(thumbnails.length).toEqual(3);
  });
  test("clicking thumbnail opens lightbox", () => {
    const thumbnails = component.container.querySelectorAll(".thumbnail");
    fireEvent.click(thumbnails[0]);
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0]).toEqual(testData[0]);
  });
  test("clicking thumbnail opens lightbox", () => {
    const component = render(
      <ThumbnailGrid isOpen={true} content={testData} />
    );
    const thumbnails = component.container.querySelectorAll(".thumbnail");
    expect(thumbnails[0]).toHaveAttribute("tabindex", "-1");
  });
  test("if no content then doesn't display thumbnails", async () => {
    const emptyComponent = render(<ThumbnailGrid />);
    expect(emptyComponent.container.querySelectorAll(".thumbnail")).not
      .toBeInTheDocument;
  });
});
