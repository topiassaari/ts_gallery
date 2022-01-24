import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Lightbox from "./Lightbox";

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
const mockHandler = jest.fn();
const component = render(
  <Lightbox img={testData[0]} content={testData} close={mockHandler} />
);

test("renders content", () => {
  const lightbox = component.container;
  expect(lightbox).toBeVisible();
});
