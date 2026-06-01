import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Precision Roofing & Exteriors" },
      {
        name: "description",
        content:
          "For over 25 years Precision Roofing & Exteriors has protected homes with certified craftsmanship, premium materials and a stress-free customer experience.",
      },
      { property: "og:title", content: "About Precision Roofing & Exteriors" },
      {
        property: "og:description",
        content: "Certified craftsmanship and trust, built into every project.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on precision, trust & craftsmanship"
        description="Two decades of protecting homes across the Treasure Valley with quality you can see and service you can trust."
        crumb="About"
      />
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <FinalCta />
    </>
  );
}
