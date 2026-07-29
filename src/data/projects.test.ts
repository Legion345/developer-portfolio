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

  // Guards the class of bug where a gallery renders blank or repeated boxes:
  // sababa-nights and sobriety-seven each shipped `[placeholder, placeholder]`,
  // rendering the real screenshot plus two identical grey placeholders. Collects
  // every offender rather than asserting per-project, which would stop at the
  // first one and hide the rest.
  it("gives every project a gallery of distinct, real images", () => {
    const problems = projects.flatMap((project) => {
      const gallery = [project.image, ...(project.images ?? [])];
      const issues: string[] = [];

      if (new Set(gallery).size !== gallery.length) {
        issues.push(`${project.slug}: duplicate image in gallery`);
      }
      if (gallery.some((src) => /placeholder/i.test(src))) {
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
