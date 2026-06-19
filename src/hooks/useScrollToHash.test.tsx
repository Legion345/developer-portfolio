import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useScrollToHash } from "./useScrollToHash";

function Harness() {
  useScrollToHash();
  return <div id="projects">projects section</div>;
}

describe("useScrollToHash", () => {
  it("scrolls to the element matching the location hash", () => {
    const scrollIntoView = vi.fn();
    // jsdom does not implement scrollIntoView, so provide it.
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={["/#projects"]}>
        <Harness />
      </MemoryRouter>,
    );

    expect(scrollIntoView).toHaveBeenCalled();
  });
});
