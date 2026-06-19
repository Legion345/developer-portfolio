import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

const sample: Project = {
  id: "1",
  slug: "demo-project",
  title: "Demo Project",
  category: "Web Development",
  image: "demo.png",
  description: "A demo description.",
  technologies: ["TypeScript"],
};

describe("ProjectCard", () => {
  it("links to the project's detail route", () => {
    render(
      <MemoryRouter>
        <ProjectCard project={sample} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /show project: demo project/i }),
    ).toHaveAttribute("href", "/projects/demo-project");
  });

  it("shows the project's category label", () => {
    render(
      <MemoryRouter>
        <ProjectCard project={sample} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Web Development")).toBeInTheDocument();
  });
});
