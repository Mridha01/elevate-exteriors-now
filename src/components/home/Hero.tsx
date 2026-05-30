import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Star, ShieldCheck, BadgeDollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site";
import heroImg from "@/assets/hero-home.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Modern home with a brand new architectural shingle roof at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-ink/30" />

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-20 md:pb-36 md:pt-28">
        <div className="max-w-2xl">
          <div className="animate-[fade-in_0.6s_ease-out] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-600 text-white backdrop-blur-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />
              ))}
            </span>
            <span>
              {company.rating}/5 · {company.reviews} reviews
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-800 leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Protecting Homes With{" "}
            <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Precision &amp; Excellence
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{company.tagline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Free Estimate <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href={company.phoneHref}>
                <Phone /> Call {company.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Award, label: `${company.yearsExperience}+ Years Experience` },
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: BadgeDollarSign, label: "Financing Available" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-600 text-white/90">
                <Icon className="size-5 text-primary-glow" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* curved divider */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
