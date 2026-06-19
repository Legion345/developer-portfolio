import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smooth-scrolls to the element whose id matches the current location hash.
 * Runs whenever the hash changes — e.g. after navigating from a project page
 * back to `/#projects`.
 */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document
      .getElementById(hash.slice(1))
      ?.scrollIntoView?.({ behavior: "smooth" });
  }, [hash]);
}
