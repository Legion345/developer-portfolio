import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./ProjectDetail";
import { projects } from "@/data/projects";

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
    const project = projects[0];
    renderAt(`/projects/${project.slug}`);

    expect(
      screen.getByRole("heading", { name: project.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
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
    renderAt("/projects/arduino-car");

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Legion345/arduino-car",
    );
  });

  it("links back to the projects section", () => {
    renderAt("/projects/sovrn-coaching");

    expect(
      screen.getByRole("link", { name: /back to projects/i }),
    ).toHaveAttribute("href", "/#projects");
  });

  it("displays the project category", () => {
    const project = projects[0];
    renderAt(`/projects/${project.slug}`);

    expect(screen.getByText(project.category)).toBeInTheDocument();
  });

  it("lists each of the project's technologies", () => {
    renderAt("/projects/arduino-car");

    expect(screen.getByText("C++")).toBeInTheDocument();
    expect(screen.getByText("Makefile")).toBeInTheDocument();
    expect(screen.getByText("Arduino UNO")).toBeInTheDocument();
  });

  it("renders the primary image plus each of the project's extra images", () => {
    const project = projects[0];
    renderAt(`/projects/${project.slug}`);

    const expectedCount = 1 + (project.images?.length ?? 0);

    expect(screen.getAllByRole("img")).toHaveLength(expectedCount);
  });

  it("renders the description above the images", () => {
    const project = projects[0];
    renderAt(`/projects/${project.slug}`);

    const description = screen.getByText(project.description);
    const firstImage = screen.getAllByRole("img")[0];

    // DOCUMENT_POSITION_FOLLOWING (4) => the image appears after `description`.
    expect(
      description.compareDocumentPosition(firstImage) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders the technologies and links above the images", () => {
    renderAt("/projects/arduino-car");

    const githubLink = screen.getByRole("link", { name: /github/i });
    const firstImage = screen.getAllByRole("img")[0];

    // The image gallery sits at the bottom, after the tech/links section.
    expect(
      githubLink.compareDocumentPosition(firstImage) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
