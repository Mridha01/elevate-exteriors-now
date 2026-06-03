import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { FinalCta } from "@/components/home/FinalCta";
import { cities, company } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Service Areas | Roofing & Exteriors Across the Memphis Area" },
      {
        name: "description",
        content:
          "Precision Roofing & Exteriors serves Memphis, Germantown, Collierville, Bartlett, Cordova and the greater Memphis area with premium roofing, siding and gutters.",
      },
      { property: "og:title", content: "Service Areas | Precision Roofing & Exteriors" },
      {
        property: "og:description",
        content: "Local roofing & exterior experts across the greater Memphis area.",
      },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas" },
          ]),
        ),
      },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Proudly serving the greater Memphis area"
        description="Local, responsive and trusted across the Mid-South. Choose your city for local roofing and exterior details."
        crumb="Service Areas"
      />

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 80}>
                <Link
                  to="/service-areas/$city"
                  params={{ city: c.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <span className="flex items-center gap-2 font-display text-lg font-700 text-foreground">
                    <MapPin className="size-5 text-primary" /> {c.name}, {c.state}
                  </span>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-primary">
                    View {c.name} services
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ServiceAreaMap />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-display text-lg font-700 text-foreground">
                Don't see your town?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We cover much of the greater Memphis area. Give us a call — chances are we serve
                your area.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-4 w-full">
                <a href={company.phoneHref}>
                  <Phone /> {company.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
