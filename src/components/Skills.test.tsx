import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  // Both heading lines are asserted, exactly: the accessible name concatenates
  // them without a space because <br> contributes no whitespace. Matching the
  // whole name is what stops a title line and its blurb from drifting apart the
  // way they did before, and an exact match avoids treating a title as a regex.
  it.each([
    ["Software", "Development", /functional and OOP/],
    ["Backend Dev", "Springboot, REST API", /API design and optimization/],
    ["React Native Dev", "Android, iOS", /hybrid mobile apps/],
  ])(
    "renders the %s / %s category with its description",
    (line1, line2, description) => {
      render(<Skills />);

      expect(
        screen.getByRole("heading", { name: line1 + line2 }),
      ).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    },
  );

  // Tripwire: a category added to the data but not to the table above would
  // otherwise go silently untested.
  it("renders every category in the data and no others", () => {
    render(<Skills />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });

  // Guards the ffd3f97 regression: the per-skill data model was replaced by one
  // entry per category, but the markup kept an <h4>{skill.name}</h4> that no
  // longer had a backing field and rendered as an empty heading.
  it("renders no empty headings", () => {
    render(<Skills />);

    for (const heading of screen.getAllByRole("heading")) {
      expect(heading.textContent?.trim()).not.toBe("");
    }
  });
});
