import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, CreditCard, CalendarClock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const plans = [
  {
    icon: CalendarClock,
    title: "Flexible Payment Plans",
    text: "Spread the cost of your project over terms that fit your budget.",
  },
  {
    icon: CreditCard,
    title: "Low Monthly Financing",
    text: "Affordable monthly payments with competitive rates and no prepayment penalty.",
  },
  {
    icon: Zap,
    title: "Easy Approval Process",
    text: "Quick online application with fast decisions — often within minutes.",
  },
];

export function FinancingSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Financing"
            title="Protect your home now, pay over time"
            description="Don't let budget delay critical repairs. Our flexible financing puts a premium roof within reach with simple, affordable monthly payments."
          />
          <ul className="mt-6 space-y-3">
            {["No money down options", "Competitive low rates", "Fast, simple approval"].map(
              (f) => (
                <li key={f} className="flex items-center gap-2.5 font-600 text-foreground">
                  <CheckCircle2 className="size-5 text-primary" /> {f}
                </li>
              ),
            )}
          </ul>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Explore Financing <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {plans.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-700 text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
