"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function usePrefersReducedMotion() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return mounted ? prefersReduced : false;
}
