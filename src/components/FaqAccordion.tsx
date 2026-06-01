import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface FaqAccordionProps {
  faqs: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

/** Reusable FAQ accordion. Pair with faqSchema() in the route head() for FAQPage rich results. */
export function FaqAccordion({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description = "Answers to the questions homeowners ask us most.",
}: FaqAccordionProps) {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display text-base font-700 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
