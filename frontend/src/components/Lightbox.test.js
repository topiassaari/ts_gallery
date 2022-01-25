import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Lightbox from "./Lightbox";
import { axe } from "jest-axe";

const testData = [
  {
    id: "1",
    url: "https://topias.kuvat.fi/kuvat/website%20gallery/5E6F6879-3A24-4195-9149-7EFB81FBB13B.jpeg?img=medium",
    desc: "Hamburg",
    year: 2019,
    dateAdded: "2022-01-18T08:58:02.589Z",
  },
  {
    id: "2",
    url: "https://topias.kuvat.fi/kuvat/website%20gallery/8687CBE2-9354-4CBC-9D11-768D22E45B02.jpeg?img=medium",
    desc: "Kumpula",
    year: 2018,
    dateAdded: "2022-01-18T08:58:16.294Z",
  },
  {
    id: "3",
    url: "https://topias.kuvat.fi/kuvat/website%20gallery/94F43914-3498-4349-B3A6-165F06444CE9.jpeg?img=medium",
    desc: "Lammassaari",
    year: 2019,
    dateAdded: "2022-01-18T08:58:29.189Z",
  },
];

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
