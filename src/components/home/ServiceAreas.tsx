import { MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceAreas, company } from "@/lib/site";

export function ServiceAreas() {
  return (
    <section className="bg-secondary/60 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Service Areas"
            title="Proudly serving the greater Memphis area"
            description="Local, responsive, and trusted across the Mid-South. If you don't see your town listed, give us a call — chances are we cover it."
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-600 text-foreground shadow-sm"
              >
                <MapPin className="size-3.5 text-primary" /> {area}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-ink p-1 shadow-elegant">
            <div
              className="relative aspect-[4/3] w-full rounded-[1.4rem]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 35%, color-mix(in oklab, var(--primary) 35%, transparent), transparent 45%), radial-gradient(circle at 65% 60%, color-mix(in oklab, var(--primary-glow) 30%, transparent), transparent 40%), linear-gradient(160deg, oklch(0.24 0.026 258), oklch(0.16 0.02 260))",
              }}
            >
              <svg className="absolute inset-0 size-full opacity-20" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {[
                { top: "32%", left: "28%" },
                { top: "48%", left: "55%" },
                { top: "62%", left: "38%" },
                { top: "40%", left: "70%" },
              ].map((p, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: p.top, left: p.left }}
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                    <MapPin className="size-4" />
                  </span>
                </span>
              ))}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 backdrop-blur">
                <p className="text-xs font-600 text-muted-foreground">Headquarters</p>
                <p className="text-sm font-700 text-foreground">{company.cityState}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
