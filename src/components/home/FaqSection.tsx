import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "How do I know if I need a roof repair or a full replacement?",
    a: "It depends on the roof's age, the extent of damage, and underlying decking condition. Our free inspection gives you an honest assessment and clear options so you can make the right call without pressure.",
  },
  {
    q: "Do you help with insurance claims for storm damage?",
    a: "Yes. We document all damage, meet with your adjuster when possible, and advocate on your behalf to ensure your claim is handled fairly and fully.",
  },
  {
    q: "What financing options are available?",
    a: "We offer flexible monthly payment plans with competitive rates and a fast, simple approval process — often with no money down — so you can protect your home now and pay over time.",
  },
  {
    q: "What kind of warranty do you provide?",
    a: "Every project is backed by our written workmanship warranty, plus the manufacturer's material warranty on premium products we install.",
  },
  {
    q: "How long does a typical roof replacement take?",
    a: "Most residential roof replacements are completed in a single day. Larger or more complex projects may take a bit longer — we'll give you a clear timeline up front.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Precision Roofing & Exteriors is fully licensed and insured for your complete protection and peace of mind.",
  },
];

export function FaqSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Everything you need to know before starting your project."
        />
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
