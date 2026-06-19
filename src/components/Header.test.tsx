import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { Header } from "./Header";

function LocationProbe() {
  const location = useLocation();
  return <div data-testid="loc">{location.pathname + location.hash}</div>;
}

describe("Header navigation", () => {
  it("navigates back to the landing section when a nav item is clicked off the home route", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/projects/movie-app"]}>
        <Header />
        <LocationProbe />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /\/\/ projects/i }));

    expect(screen.getByTestId("loc")).toHaveTextContent("/#projects");
  });
});
