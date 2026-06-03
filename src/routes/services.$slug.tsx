import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedServices } from "@/components/RelatedServices";
import { QuickEstimateForm } from "@/components/QuickEstimateForm";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { getService, services, company, cities } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { getServiceImage } from "@/lib/service-images";
import heroImg from "@/assets/hero-home.jpg";
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) return { meta: [{ title: "Service | Precision Roofing & Exteriors" }] };
    const path = `/services/${service.slug}`;
    return {
      meta: [
        { title: `${service.metaTitle} | Precision Roofing & Exteriors` },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: `${service.title} | Precision Roofing & Exteriors` },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceSchema({ name: service.title, description: service.metaDescription, path }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: path },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
      ],
    };
  },
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const path = `/services/${service.slug}`;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-ink px-6 py-20 md:py-28">
        <img
          src={getServiceImage(service.slug)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: path },
            ]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-primary-glow">
                <service.icon className="size-4" /> {service.title}
              </span>
              <h1 className="mt-5 font-display text-4xl font-800 leading-tight text-white sm:text-5xl">
                {service.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-ink-muted">{service.heroDesc}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Get a Free Estimate <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline-light" size="xl">
                  <a href={company.phoneHref}>
                    <Phone /> {company.phoneDisplay}
                  </a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
                <ShieldCheck className="size-4 text-primary-glow" /> Licensed & insured · Written
                workmanship warranty · Financing available
              </p>
            </div>
            <Reveal className="hidden lg:block">
              <QuickEstimateForm defaultService={service.title} compact heading="Free estimate" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Service Overview"
              title={`Professional ${service.title.toLowerCase()} you can trust`}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {service.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-600 text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={getServiceImage(service.slug)}
                alt={`Completed ${service.title.toLowerCase()} project by Precision Roofing & Exteriors`}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose This Service"
            title="Benefits that protect your home and budget"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-700 text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title={`How our ${service.title.toLowerCase()} service works`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 80}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-display text-4xl font-800 text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-700 text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Before & After */}
      <section className="bg-gradient-ink px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            invert
            eyebrow="Before & After"
            title="Real results from real projects"
            description="The difference precision craftsmanship makes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { img: beforeImg, label: "Before", alt: "Worn roof before professional work" },
              {
                img: afterImg,
                label: "After",
                alt: "Beautiful finished roof after professional work",
              },
            ].map((g) => (
              <Reveal key={g.label}>
                <figure className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                  <img
                    src={g.img}
                    alt={g.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-700 text-white backdrop-blur">
                    {g.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FaqAccordion
        faqs={service.faqs}
        title={`${service.title} FAQs`}
        description={`Common questions about our ${service.title.toLowerCase()} service.`}
      />

      <RelatedServices slugs={service.related} />

      {/* Service area internal links */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h2 className="font-display text-2xl font-700 text-foreground">
            {service.localLabel} across the greater Memphis area
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We provide {service.title.toLowerCase()} in communities throughout the region. Find
            local details for your city:
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to="/service-areas/$city"
                params={{ city: c.slug }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-600 text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MapPin className="size-3.5 text-primary" /> {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section className="bg-secondary/60 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get Started"
              title={`Ready for expert ${service.title.toLowerCase()}?`}
              description="Tell us about your project and we'll respond fast with a free, no-obligation estimate."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={company.phoneHref}>
                  <Phone /> Call {company.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="ink" size="xl">
                <Link to="/services">View all services</Link>
              </Button>
            </div>
          </div>
          <QuickEstimateForm defaultService={service.title} />
        </div>
      </section>
    </>
  );
}

export { services };
