import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-700 uppercase tracking-[0.18em]",
            invert ? "bg-white/10 text-primary-glow" : "bg-primary/10 text-primary",
          )}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-700 leading-[1.1] sm:text-4xl md:text-[2.75rem]",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-base leading-relaxed md:text-lg", invert ? "text-ink-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
