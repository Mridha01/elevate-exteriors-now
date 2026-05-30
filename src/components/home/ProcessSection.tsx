import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Search, FileText, Layers, Hammer, ClipboardCheck } from "lucide-react";

const steps = [
  { icon: Search, title: "Inspection", text: "A thorough, no-obligation roof and exterior inspection with honest findings." },
  { icon: FileText, title: "Estimate", text: "A clear, itemized estimate with options — no pressure, no hidden fees." },
  { icon: Layers, title: "Material Selection", text: "Choose premium materials and colors with expert guidance to match your home." },
  { icon: Hammer, title: "Installation", text: "Certified crews complete the work efficiently with disciplined craftsmanship." },
  { icon: ClipboardCheck, title: "Final Inspection", text: "A detailed walkthrough, magnetic nail sweep, and spotless clean-up." },
];

export function ProcessSection() {
  return (
    <section className="bg-gradient-ink px-6 py-20 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          invert
          eyebrow="Our Process"
          title="A simple, stress-free path to a better roof"
          description="From first call to final inspection, we keep things clear and on schedule."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative flex h-full flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="font-display text-5xl font-800 text-white/10">{String(i + 1).padStart(2, "0")}</span>
                <span className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-700 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
