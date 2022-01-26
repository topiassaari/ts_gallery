import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";
import { axe } from "jest-axe";

it("should not have basic accessibility issues", async () => {
  const component = render(<LoginForm />);
  const results = await axe(component.container);
  expect(results).toHaveNoViolations();
});

describe("the basics", () => {
  let component;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();
    component = render(<LoginForm login={mockHandler} />);
  });
  test("updates username", () => {
    const username = component.container.querySelector("#username");
    fireEvent.change(username, {
      target: { value: "user" },
    });
    expect(username.value).toBe("user");
  });
  test("updates password", () => {
    const password = component.container.querySelector("#password");
    fireEvent.change(password, {
      target: { value: "user" },
    });
    expect(password.value).toBe("user");
  });
  test("submits correctly", () => {
    const form = component.container.querySelector("form");
    const username = component.container.querySelector("#username");
    const password = component.container.querySelector("#password");

    fireEvent.change(username, {
      target: { value: "user" },
    });
    fireEvent.change(password, {
      target: { value: "pass" },
    });
    fireEvent.submit(form);
    expect(mockHandler.mock.calls[0]).toEqual(["user", "pass"]);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
