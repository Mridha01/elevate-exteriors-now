import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getService } from "@/lib/site";

interface RelatedServicesProps {
  slugs: string[];
  title?: string;
  eyebrow?: string;
  description?: string;
  dark?: boolean;
}

/** Internal-linking grid that points to related service pages for topical authority. */
export function RelatedServices({
  slugs,
  title = "Related services",
  eyebrow = "Explore More",
  description = "One trusted team for everything that protects your home.",
  dark = false,
}: RelatedServicesProps) {
  const items = slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  if (items.length === 0) return null;

  return (
    <section className={dark ? "bg-gradient-ink px-6 py-20 md:py-24" : "bg-secondary/60 px-6 py-20 md:py-24"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} invert={dark} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-700 text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-primary">
                  Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
