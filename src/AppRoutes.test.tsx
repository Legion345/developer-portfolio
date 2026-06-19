import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

describe("AppRoutes", () => {
  it("renders the project detail page at /projects/:slug", () => {
    render(
      <MemoryRouter initialEntries={["/projects/movie-app"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Movie App - Mobile/i }),
    ).toBeInTheDocument();
  });
});
