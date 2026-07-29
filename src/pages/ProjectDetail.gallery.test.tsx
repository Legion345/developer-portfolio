import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import type { Project } from "@/data/projects";

// A synthetic project with a known number of extra images. We mock the data
// module so the multi-image path is exercised in isolation from real content —
// this stays valid even if the real project data changes how many images it has.
const galleryProject: Project = {
  id: "test",
  slug: "gallery-project",
  title: "Gallery Project",
  category: "Test",
  image: "primary.png",
  images: ["second.png", "third.png"],
  description: "A project used to verify multi-image gallery rendering.",
  technologies: ["Test"],
};

vi.mock("@/data/projects", () => ({
  getProjectBySlug: (slug: string | undefined) =>
    slug === galleryProject.slug ? galleryProject : undefined,
}));

// Imported after the mock is registered so ProjectDetail picks up the mock.
const { ProjectDetail } = await import("./ProjectDetail");

describe("ProjectDetail gallery", () => {
  it("renders the primary image plus every extra image", () => {
    render(
      <MemoryRouter initialEntries={["/projects/gallery-project"]}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
