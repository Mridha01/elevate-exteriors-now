import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

interface BreadcrumbsProps {
  items: Crumb[];
  /** Render dark-on-light (default) or light-on-dark for hero overlays. */
  variant?: "light" | "dark";
}

/**
 * Accessible visual breadcrumb trail. JSON-LD is emitted separately in each
 * route's head() via breadcrumbSchema() so crawlers get structured data.
 */
export function Breadcrumbs({ items, variant = "light" }: BreadcrumbsProps) {
  const base = variant === "dark" ? "text-ink-muted" : "text-muted-foreground";
  const active = variant === "dark" ? "text-white" : "text-foreground";
  const hover = variant === "dark" ? "hover:text-primary-glow" : "hover:text-primary";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span className={`font-600 ${active}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.href} className={`transition-colors ${hover}`}>
                    {item.label}
                  </Link>
                  <ChevronRight className="size-3.5 opacity-60" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
