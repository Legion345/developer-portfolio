import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./ProjectDetail";
import type { Project } from "@/data/projects";

// ProjectDetail is a presentation component: every branch of its markup is
// driven by the fields on a Project, not by which projects happen to exist
// today. These fixtures cover both branches of each optional field, so the
// suite stays meaningful as real content changes. (Pinning to real slugs is
// what broke this file when arduino-car was removed from the data.)
const fullProject = {
  id: "full",
  slug: "full-project",
  title: "Full Project",
  category: "Web Development",
  image: "primary.png",
  images: ["second.png", "third.png"],
  description: "A project exercising every optional field.",
  technologies: ["TypeScript", "Vite"],
  githubUrl: "https://github.com/example/full-project",
  liveUrl: "https://example.com",
} satisfies Project;

// No githubUrl, no liveUrl, no extra images.
const minimalProject = {
  id: "minimal",
  slug: "minimal-project",
  title: "Minimal Project",
  category: "Game",
  image: "only.png",
  description: "A project with no links and no extra images.",
  technologies: ["Java"],
} satisfies Project;

const fixtures = [fullProject, minimalProject];

vi.mock("@/data/projects", () => ({
  getProjectBySlug: (slug: string | undefined) =>
    fixtures.find((project) => project.slug === slug),
}));

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
    renderAt(`/projects/${fullProject.slug}`);

    expect(
      screen.getByRole("heading", { name: fullProject.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(fullProject.description)).toBeInTheDocument();
  });

  it("shows a not-found message for an unknown slug", () => {
    renderAt("/projects/does-not-exist");

    expect(screen.getByText(/project not found/i)).toBeInTheDocument();
  });

  it("displays the project category", () => {
    renderAt(`/projects/${fullProject.slug}`);

    expect(screen.getByText(fullProject.category)).toBeInTheDocument();
  });

  it("lists each of the project's technologies", () => {
    renderAt(`/projects/${fullProject.slug}`);

    for (const tech of fullProject.technologies) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  it("renders a live-site link pointing at the project's liveUrl when present", () => {
    renderAt(`/projects/${fullProject.slug}`);

    expect(screen.getByRole("link", { name: /open project/i })).toHaveAttribute(
      "href",
      fullProject.liveUrl,
    );
  });

  it("omits the live-site link when the project has no liveUrl", () => {
    renderAt(`/projects/${minimalProject.slug}`);

    expect(
      screen.queryByRole("link", { name: /open project/i }),
    ).not.toBeInTheDocument();
  });

  it("renders a GitHub link pointing at the project's githubUrl when present", () => {
    renderAt(`/projects/${fullProject.slug}`);

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      fullProject.githubUrl,
    );
  });

  it("omits the GitHub link when the project has no githubUrl", () => {
    renderAt(`/projects/${minimalProject.slug}`);

    expect(
      screen.queryByRole("link", { name: /github/i }),
    ).not.toBeInTheDocument();
  });

  it("links back to the projects section", () => {
    renderAt(`/projects/${fullProject.slug}`);

    expect(
      screen.getByRole("link", { name: /back to projects/i }),
    ).toHaveAttribute("href", "/#projects");
  });

  it("renders the primary image plus each of the project's extra images", () => {
    renderAt(`/projects/${fullProject.slug}`);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(1 + fullProject.images.length);
    expect(images.map((image) => image.getAttribute("src"))).toEqual([
      fullProject.image,
      ...fullProject.images,
    ]);
  });

  it("renders only the primary image when the project has no extra images", () => {
    renderAt(`/projects/${minimalProject.slug}`);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(1);
    expect(images[0]).toHaveAttribute("src", minimalProject.image);
  });

  it("renders the description above the images", () => {
    renderAt(`/projects/${fullProject.slug}`);

    const description = screen.getByText(fullProject.description);
    const firstImage = screen.getAllByRole("img")[0];

    // DOCUMENT_POSITION_FOLLOWING (4) => the image appears after `description`.
    expect(
      description.compareDocumentPosition(firstImage) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders the technologies and links above the images", () => {
    renderAt(`/projects/${fullProject.slug}`);

    const githubLink = screen.getByRole("link", { name: /github/i });
    const firstImage = screen.getAllByRole("img")[0];

    // The image gallery sits at the bottom, after the tech/links section.
    expect(
      githubLink.compareDocumentPosition(firstImage) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
