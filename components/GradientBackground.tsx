import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

export function GradientBackground({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={cn("gradient-background", className)} {...props}>{children}</div>;
}
