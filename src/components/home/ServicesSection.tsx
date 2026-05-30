import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="bg-secondary/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete roofing & exterior services"
          description="One trusted team for everything that protects your home — from the roof down to the gutters and siding."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 80}>
              <Link
                to="/services"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
              >
                <span className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <service.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-700 text-foreground">{service.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-primary">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
