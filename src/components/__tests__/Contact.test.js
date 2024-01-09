import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Is Heading inside Contact component loading", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("how many input boxes are there inside Contact Component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});

test("Is there a submit button on the page", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeTruthy();
});
