import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ArrowRight, Phone, CheckCircle2, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuickEstimateForm } from "@/components/QuickEstimateForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { getCity, services, company, cities } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/service-areas/$city")({
  head: ({ params }) => {
    const city = getCity(params.city);
    if (!city) return { meta: [{ title: "Service Area | Precision Roofing & Exteriors" }] };
    const path = `/service-areas/${city.slug}`;
    const title = `Roofing Contractor in ${city.name}, ${city.state}`;
    const desc = `Trusted roofing, siding, gutters & exterior services in ${city.name}, ${city.state}. Licensed, insured, free estimates. Local experts you can count on.`;
    return {
      meta: [
        { title: `${title} | Precision Roofing & Exteriors` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceSchema({
              name: `Roofing & Exterior Services in ${city.name}`,
              description: desc,
              path,
              areaServed: `${city.name}, ${city.state}`,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: city.name, href: path },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(cityFaqs(city.name))) },
      ],
    };
  },
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  component: CityPage,
});

function cityFaqs(name: string) {
  return [
    { q: `Do you offer free estimates in ${name}?`, a: `Yes. We provide free, no-obligation roofing and exterior estimates throughout ${name} and the surrounding Treasure Valley.` },
    { q: `Are you licensed and insured to work in ${name}?`, a: `Absolutely. We are fully licensed and insured and complete every ${name} project to code with a written workmanship warranty.` },
    { q: `How fast can you respond to a roof emergency in ${name}?`, a: `We prioritize emergencies in ${name} and dispatch crews quickly for emergency tarping and protection to prevent further damage.` },
    { q: `Do you help with insurance claims in ${name}?`, a: `Yes. We document storm damage in ${name} and support your insurance claim from inspection through restoration.` },
  ];
}

function CityPage() {
  const { city: slug } = Route.useParams();
  const city = getCity(slug)!;
  const path = `/service-areas/${city.slug}`;
  const reviews = [
    { name: "Homeowner", text: `The crew did a fantastic job on our roof here in ${city.name}. Professional, clean and on time.`, initials: "HO" },
    { name: "Local Resident", text: `Honest pricing and great communication. Highly recommend Precision to anyone in ${city.name}.`, initials: "LR" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-ink px-6 py-20 md:py-28">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 -z-10 size-full object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: city.name, href: path },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-primary-glow">
              <MapPin className="size-4" /> {city.name}, {city.state}
            </span>
            <h1 className="mt-5 font-display text-4xl font-800 leading-tight text-white sm:text-5xl">
              Roofing Contractor in {city.name}, {city.state}
            </h1>
            <p className="mt-4 text-lg text-ink-muted">{city.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get a Free Estimate <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <a href={company.phoneHref}><Phone /> {company.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Local Expertise" title={`Your trusted exterior contractor in ${city.name}`} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{city.localNote}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              From {city.landmarks.slice(0, 3).join(", ")} and beyond, {city.name} homeowners trust Precision
              Roofing & Exteriors for roofing, siding, gutters and windows backed by a written warranty.
            </p>
            <h2 className="mt-10 font-display text-xl font-700 text-foreground">Services we offer in {city.name}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-600 text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary" /> {s.localLabel} in {city.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <QuickEstimateForm heading={`Free ${city.name} estimate`} />
          </div>
        </div>
      </section>

      {/* Local reviews */}
      <section className="bg-secondary/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Local Reviews" title={`What ${city.name} homeowners say`} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <Reveal key={r.initials}>
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <Quote className="size-7 text-primary/30" />
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-700 text-primary-foreground">
                      {r.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-700 text-foreground">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">{city.name}, {city.state}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Coverage" title={`Serving all of ${city.name}`} />
          <div className="mt-10">
            <ServiceAreaMap query={`${city.name}, ${city.state}`} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                to="/service-areas/$city"
                params={{ city: c.slug }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-600 text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MapPin className="size-3.5 text-primary" /> {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={cityFaqs(city.name)}
        title={`${city.name} roofing FAQs`}
        description={`Common questions from ${city.name} homeowners.`}
      />

      {/* CTA */}
      <section className="bg-gradient-ink px-6 py-20 md:py-24 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
            Ready to protect your {city.name} home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
            Get your free, no-obligation estimate from {city.name}'s trusted roofing and exterior team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href={company.phoneHref}><Phone /> {company.phoneDisplay}</a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
