import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useCountUp } from "@/hooks/use-count-up";
import { company } from "@/lib/site";
import aboutImg from "@/assets/about-crew.jpg";

const stats = [
  { value: 5200, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "yrs", label: "Years Experience" },
  { value: 4800, suffix: "+", label: "Happy Customers" },
  { value: 12, suffix: "", label: "Service Areas" },
];

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
      <span ref={ref} className="font-display text-3xl font-800 text-primary md:text-4xl">
        {current.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-1 text-sm font-600 text-muted-foreground">{label}</p>
    </div>
  );
}

const values = [
  "Honest, transparent pricing — no surprises",
  "Manufacturer-certified installation crews",
  "Meticulous clean-up on every job site",
  "Workmanship warranty backed in writing",
];

export function AboutSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={aboutImg}
              alt="Precision Roofing crew installing shingles on a residential roof"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-ink-foreground shadow-glow sm:-right-6">
            <Award className="size-9 text-primary-glow" />
            <div>
              <p className="font-display text-2xl font-800 leading-none">
                {company.yearsExperience}+
              </p>
              <p className="text-xs text-ink-muted">Years of Excellence</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Our Company"
            title="Craftsmanship and trust, built into every project"
            description="Precision Roofing & Exteriors was founded on a simple promise: protect homes with uncompromising quality and treat every customer like a neighbor. For over two decades, our certified team has delivered roofing and exterior solutions that stand the test of time and weather."
          />

          <p className="mt-4 text-muted-foreground">
            Our mission is to be the most trusted exterior contractor in the region — combining
            premium materials, skilled craftsmanship, and a customer experience that's stress-free
            from inspection to final walkthrough.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2.5 text-sm font-500 text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">
                Learn More About Us <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Reveal className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </Reveal>
    </section>
  );
}
