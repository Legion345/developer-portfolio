import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./ProjectDetail";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ProjectDetail", () => {
  it("renders the title and description for a known slug", () => {
    renderAt("/projects/movie-app");

    expect(
      screen.getByRole("heading", { name: /Movie App - Mobile/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/browse trending movies/i)).toBeInTheDocument();
  });

  it("shows a not-found message for an unknown slug", () => {
    renderAt("/projects/does-not-exist");

    expect(screen.getByText(/project not found/i)).toBeInTheDocument();
  });

  it("renders a live-site link pointing at the project's liveUrl when present", () => {
    renderAt("/projects/sababa-nights");

    expect(screen.getByRole("link", { name: /open project/i })).toHaveAttribute(
      "href",
      "https://www.sababanights.com",
    );
  });

  it("omits the live-site link when the project has no liveUrl", () => {
    renderAt("/projects/sovrn-coaching");

    expect(
      screen.queryByRole("link", { name: /open project/i }),
    ).not.toBeInTheDocument();
  });

  it("renders a GitHub link pointing at the project's githubUrl", () => {
    renderAt("/projects/sovrn-coaching");

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Legion345/springboot-restapi",
    );
  });

  it("links back to the projects section", () => {
    renderAt("/projects/sovrn-coaching");

    expect(
      screen.getByRole("link", { name: /back to projects/i }),
    ).toHaveAttribute("href", "/#projects");
  });

  it("displays the project category", () => {
    renderAt("/projects/movie-app");

    expect(screen.getByText("Mobile App")).toBeInTheDocument();
  });

  it("lists each of the project's technologies", () => {
    renderAt("/projects/arduino-car");

    expect(screen.getByText("C++")).toBeInTheDocument();
    expect(screen.getByText("Makefile")).toBeInTheDocument();
    expect(screen.getByText("Arduino UNO")).toBeInTheDocument();
  });
});
