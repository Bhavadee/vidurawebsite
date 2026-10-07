import { useEffect, useState } from "react";

export function useMedia(query: string, initial = false) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? initial : window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export const useIsMobile = () => useMedia("(max-width: 767px)");
export const useFinePointer = () => useMedia("(pointer: fine)");
export const useReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)");
