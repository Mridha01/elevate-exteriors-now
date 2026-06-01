import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonials } from "@/components/home/Testimonials";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinancingSection } from "@/components/home/FinancingSection";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precision Roofing & Exteriors | Roofing, Siding & Gutters" },
      {
        name: "description",
        content:
          "Premium roofing, siding, gutters, windows and storm-damage exterior solutions built to last. Licensed, insured, financing available. Free estimates.",
      },
      { property: "og:title", content: "Precision Roofing & Exteriors" },
      {
        property: "og:description",
        content: "Trusted roofing, siding, gutters & exterior solutions built to last.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <BeforeAfter />
      <Testimonials />
      <ProcessSection />
      <FinancingSection />
      <ServiceAreas />
      <FaqSection />
      <FinalCta />
    </>
  );
}
