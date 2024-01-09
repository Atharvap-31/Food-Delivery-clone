import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import RES_DATA from "../mocks/RestaurantList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_DATA);
    },
  });
});

it("Should search Res List for text 'a' ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBox = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchBox, { target: { value: "a" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(8);
});

it("Should search Top Rated Restaurant ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick.length).toBe(9);

  const TopRatedRestuarantBtn = screen.getByRole("button", {
    name: "Rating 4.0+",
  });

  fireEvent.click(TopRatedRestuarantBtn);

  const cardsAfterClick = screen.getAllByTestId("resCard");

  expect(cardsAfterClick.length).toBe(8);
});
