import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinancingSection } from "@/components/home/FinancingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Roofing, Siding, Gutters & More" },
      {
        name: "description",
        content:
          "Complete roofing and exterior services: roof repair, replacement, siding, gutters, windows, storm damage and full exterior solutions. Free estimates.",
      },
      { property: "og:title", content: "Roofing & Exterior Services | Precision" },
      { property: "og:description", content: "One trusted team for everything that protects your home." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete roofing & exterior solutions"
        description="From the roof down to the gutters and siding, we deliver premium results backed by a written warranty."
        crumb="Services"
      />

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <service.icon className="size-7" />
                  </span>
                  <h2 className="font-display text-xl font-700 text-foreground">{service.title}</h2>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="grid gap-2 sm:grid-cols-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs font-600 text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ink" size="sm" className="mt-auto w-fit">
                  <Link to="/services/$slug" params={{ slug: service.slug }}>
                    View Service <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinancingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
