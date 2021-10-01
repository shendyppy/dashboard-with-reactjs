import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Dashboard", () => {
  test("Should render navbar correctly", () => {
    render(<App />);

    screen.getByText("Your NBA App");
  });
});

describe("Favorites", () => {
  test("Should render navbar correctly", () => {
    render(<App />);

    screen.getByText("Your NBA App");
  });
});

describe("Detail", () => {
  test("Should render navbar correctly", () => {
    render(<App />);

    screen.getByText("Your NBA App");
  });
});
