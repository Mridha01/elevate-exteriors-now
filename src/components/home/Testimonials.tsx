import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reviews = [
  {
    name: "Sarah M.",
    location: "Germantown, TN",
    initials: "SM",
    text: "Precision replaced our entire roof in a single day. The crew was professional, tidy, and the new roof looks incredible. Couldn't be happier.",
  },
  {
    name: "David R.",
    location: "Memphis, TN",
    initials: "DR",
    text: "After a hailstorm they handled my insurance claim start to finish. They got far more approved than I expected and the work is flawless.",
  },
  {
    name: "Jennifer L.",
    location: "Collierville, TN",
    initials: "JL",
    text: "New siding and gutters transformed our home's curb appeal. Honest pricing, great communication, and zero mess left behind.",
  },
  {
    name: "Michael T.",
    location: "Bartlett, TN",
    initials: "MT",
    text: "Financing made it easy to get the premium roof we wanted. The team explained every option clearly. Highly recommend Precision.",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trusted by hundreds of local homeowners"
          description="Real reviews from real neighbors who chose Precision to protect their homes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 80}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-card">
                <Quote className="size-7 text-primary/30" />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-700 text-primary-foreground">
                    {r.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-700 text-foreground">{r.name}</span>
                    <span className="block text-xs text-muted-foreground">{r.location}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
