import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/site";
import ctaImg from "@/assets/cta-home.jpg";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
      <img
        src={ctaImg}
        alt="Modern home at dusk with warm interior lights"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-800 leading-tight text-white sm:text-5xl">
          Ready To Protect Your Home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          Schedule your free inspection today and get a no-obligation estimate from the team trusted by
          hundreds of local homeowners.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              <CalendarCheck /> Schedule Free Inspection
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="xl">
            <a href={company.phoneHref}>
              <Phone /> Get a Free Estimate
            </a>
          </Button>
        </div>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-white/80 hover:text-primary-glow"
        >
          Explore all our services <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
