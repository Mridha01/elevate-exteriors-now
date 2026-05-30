import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}

/** Wraps children and animates them in on scroll. */
export function Reveal({ children, className, as: Tag = "div", delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
