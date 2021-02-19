import App from "../App";
import { render, screen } from "@testing-library/react";
import math from "../util/functions";

test("testing App.js component", () => {
  const { getByText, getAllByRole } = render(<App />);
  const listItems = getAllByRole("listitem");
  const h1 = getByText(/home page/i);
  //testing home page
  expect(h1).toHaveTextContent("Home Page");
  //testing navbar
  listItems.map(list => {
    return expect(list).toHaveTextContent(/home|anime/gi);
  });
  screen.debug();
});

it("adding", () => {
  expect(math.add(5, 5)).toBe(10);
});

it("divide", () => {
  expect(math.divide(5, 5)).toBe(1);
});
