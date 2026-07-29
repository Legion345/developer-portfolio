import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug } from "./projects";

describe("projects data", () => {
  it("gives every project a unique, non-empty slug", () => {
    const slugs = projects.map((project) => project.slug);

    expect(slugs.every((slug) => slug.length > 0)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project a non-empty category", () => {
    expect(projects.every((project) => project.category.length > 0)).toBe(true);
  });

  it("looks up a project by slug and returns undefined when missing", () => {
    const first = projects[0];
    expect(getProjectBySlug(first.slug)?.title).toBe(first.title);
    expect(getProjectBySlug("nope")).toBeUndefined();
  });
});
