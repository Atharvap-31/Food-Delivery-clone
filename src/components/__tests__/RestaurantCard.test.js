import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCard.mock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Ramji Shamji Pohewale");

  expect(name).toBeInTheDocument();
});
