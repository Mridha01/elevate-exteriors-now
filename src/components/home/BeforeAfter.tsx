import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  return (
    <section className="bg-secondary/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Before & After"
          title="Transformations that speak for themselves"
          description="Drag the slider to see the difference precision craftsmanship makes."
        />

        <Reveal className="mt-12">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-elegant"
            onMouseMove={(e) => dragging.current && move(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
          >
            <img
              src={afterImg}
              alt="Home after new roof installation"
              width={1280}
              height={960}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={beforeImg}
                alt="Worn damaged roof before replacement"
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
                style={{ width: containerRef.current?.offsetWidth }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-700 text-white backdrop-blur">
                Before
              </span>
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-700 text-primary-foreground">
              After
            </span>

            <button
              type="button"
              aria-label="Drag to compare"
              className="absolute top-0 z-10 flex h-full w-1 cursor-ew-resize items-center justify-center bg-white"
              style={{ left: `calc(${pos}% - 2px)` }}
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-elegant">
                <MoveHorizontal className="size-5" />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
