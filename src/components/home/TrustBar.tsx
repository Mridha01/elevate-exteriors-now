import { ShieldCheck, BadgeDollarSign, BadgeCheck, Clock, Siren } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeDollarSign, label: "Financing Available" },
  { icon: BadgeCheck, label: "Warranty Protection" },
  { icon: Clock, label: "Fast Response Time" },
  { icon: Siren, label: "Emergency Services" },
];

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-10 px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-elegant sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 bg-card px-4 py-7 text-center transition-colors hover:bg-secondary"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <span className="text-sm font-700 leading-tight text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
