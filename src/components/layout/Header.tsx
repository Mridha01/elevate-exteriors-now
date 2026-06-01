import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { company, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-2 text-ink-muted">
            <Star className="size-3.5 fill-[var(--gold)] text-[var(--gold)]" />
            <span>
              Rated <strong className="text-ink-foreground">{company.rating}/5</strong> from{" "}
              {company.reviews} homeowners
            </span>
          </div>
          <div className="flex items-center gap-6 text-ink-muted">
            <span>{company.hours}</span>
            <a
              href={company.phoneHref}
              className="flex items-center gap-1.5 font-600 text-ink-foreground hover:text-primary-glow"
            >
              <Phone className="size-3.5" /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "glass-light border-border/60 shadow-card"
            : "border-transparent bg-background/85 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link to="/" aria-label={company.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-4 py-2 text-sm font-600 text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-sm font-700 text-foreground hover:text-primary"
            >
              <Phone className="size-4 text-primary" />
              {company.phoneDisplay}
            </a>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 lg:hidden",
            open ? "max-h-96" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2.5 text-base font-600 text-foreground/90 hover:bg-secondary data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild variant="outline" size="lg">
                <a href={company.phoneHref}>
                  <Phone /> {company.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
