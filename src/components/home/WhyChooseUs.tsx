import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Gem, Wallet, FileCheck2, Timer, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Professionals",
    text: "Manufacturer-certified, background-checked crews who treat your home with respect.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    text: "We install top-tier, warrantied products engineered for decades of protection.",
  },
  {
    icon: Wallet,
    title: "Financing Options",
    text: "Flexible monthly plans with fast approval so you never have to wait to protect your home.",
  },
  {
    icon: FileCheck2,
    title: "Insurance Claim Assistance",
    text: "We document damage and advocate with your insurer to maximize your claim.",
  },
  {
    icon: Timer,
    title: "Fast Project Completion",
    text: "Efficient scheduling and disciplined crews mean most roofs are done in a day.",
  },
  {
    icon: ShieldCheck,
    title: "Workmanship Warranty",
    text: "Every project is backed by our written workmanship warranty for total peace of mind.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The premium standard in roofing & exteriors"
          description="Homeowners choose Precision because we deliver quality you can see and service you can trust."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <r.icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-700 text-foreground">{r.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
