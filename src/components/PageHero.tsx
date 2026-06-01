import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumb: string;
}

export function PageHero({ eyebrow, title, description, crumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-ink px-6 py-20 text-center md:py-24">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, color-mix(in oklab, var(--primary) 40%, transparent), transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-primary-glow">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-4xl font-800 leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">{description}</p>
        )}
        <nav className="mt-6 flex items-center justify-center gap-1.5 text-sm text-ink-muted">
          <Link to="/" className="hover:text-primary-glow">
            Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-600 text-white">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
