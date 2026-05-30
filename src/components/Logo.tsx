import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

/** Precision Roofing & Exteriors wordmark with roof-line mark. */
export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" aria-hidden="true">
          <path d="M2 11 12 4l10 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-base font-700 tracking-tight", textColor)}>Precision</span>
        <span className={cn("text-[0.62rem] font-600 uppercase tracking-[0.22em]", subColor)}>
          Roofing &amp; Exteriors
        </span>
      </span>
    </span>
  );
}
