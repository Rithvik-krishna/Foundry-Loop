"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function usePrefersReducedMotion() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? prefersReduced : false;
}
