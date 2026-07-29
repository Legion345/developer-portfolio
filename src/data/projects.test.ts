import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug } from "./projects";
import placeholder from "@/assets/images/placeholder.svg";

describe("projects data", () => {
  it("gives every project a unique, non-empty slug", () => {
    const slugs = projects.map((project) => project.slug);

    expect(slugs.every((slug) => slug.length > 0)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project a non-empty category", () => {
    expect(projects.every((project) => project.category.length > 0)).toBe(true);
  });

  // Two invariants, both guarding galleries that render blank or repeated boxes:
  // no entry may repeat, and none may be the shared placeholder standing in for a
  // real screenshot. Compares against the imported asset rather than matching on
  // filename — placeholder.svg is under Vite's `assetsInlineLimit`, so it resolves
  // to a base64 data URI with the name erased, which made a substring check never
  // fire. Collects every offender instead of asserting per-project, which would
  // stop at the first one and hide the rest.
  it("gives every project a gallery of distinct, real images", () => {
    const problems = projects.flatMap((project) => {
      const gallery = [project.image, ...(project.images ?? [])];
      const issues: string[] = [];

      if (new Set(gallery).size !== gallery.length) {
        issues.push(`${project.slug}: duplicate image in gallery`);
      }
      if (gallery.includes(placeholder)) {
        issues.push(`${project.slug}: placeholder stands in for a real image`);
      }

      return issues;
    });

    expect(problems).toEqual([]);
  });

  it("looks up a project by slug and returns undefined when missing", () => {
    const first = projects[0];
    expect(getProjectBySlug(first.slug)?.title).toBe(first.title);
    expect(getProjectBySlug("nope")).toBeUndefined();
  });
});
