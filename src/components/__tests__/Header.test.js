import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
    </Provider>
  );

  // quering
  const loginButton = screen.getByRole("button", { name: "Log In" });

  // assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart Link with 0 items", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
    </Provider>
  );

  // quering
  const cardItems = screen.getByText("Cart (0)");

  // assertion
  expect(cardItems).toBeInTheDocument();
});

it("Should check the login button turns into logout on click", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginBtn = screen.getByRole("button", { name: "Log In" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Log Out" });

  expect(logoutBtn).toBeInTheDocument();
});
