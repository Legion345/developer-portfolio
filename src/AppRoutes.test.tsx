import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { projects } from "@/data/projects";

describe("AppRoutes", () => {
  it("renders the project detail page at /projects/:slug", () => {
    const project = projects[0];
    render(
      <MemoryRouter initialEntries={[`/projects/${project.slug}`]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: project.title }),
    ).toBeInTheDocument();
  });
});
