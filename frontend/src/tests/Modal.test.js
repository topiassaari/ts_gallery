import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import Modal from "../components/Modal";
//import { prettyDOM } from "@testing-library/dom";

it("should not have basic accessibility issues", async () => {
  const component = render(<Modal />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

describe("the basics", () => {
  test("modal can be opened", () => {
    const component = render(<Modal open={true} />);
    expect(component.container.querySelector(".modalContainer")).toBeVisible();
  });
  test("modal is not visible when not opened", () => {
    const component = render(<Modal open={false} />);
    expect(
      component.container.querySelector(".modalContainer")
    ).not.toBeVisible();
  });
  test("close button has click handler", () => {
    const mockHandler = jest.fn();
    const component = render(<Modal onClose={mockHandler} />);
    fireEvent.click(component.getByText("x"));
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test("modal displays content", () => {
    const component = render(
      <Modal open={true}>
        <p id="test">Test</p>
      </Modal>
    );
    expect(component.container.querySelector("#test")).toBeVisible();
  });
});
