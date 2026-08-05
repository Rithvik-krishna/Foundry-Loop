import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

type Props = (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>) & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  arrow?: boolean;
};

export function Button({ className, variant = "primary", arrow = true, children, href, ...props }: Props) {
  const content = <>{children}{arrow && <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />}</>;
  const classes = cn("button", `button-${variant}`, className);
  if (href) return <Link href={href} className={classes}>{content}</Link>;
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>;
}
