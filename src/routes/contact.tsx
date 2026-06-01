import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Free Estimate — Precision Roofing & Exteriors" },
      {
        name: "description",
        content:
          "Request your free roofing or exterior estimate. Call Precision Roofing & Exteriors or send us a message — fast response, no obligation.",
      },
      { property: "og:title", content: "Contact Precision Roofing & Exteriors" },
      { property: "og:description", content: "Get your free, no-obligation estimate today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactCards = [
  { icon: Phone, label: "Call Us", value: company.phoneDisplay, href: company.phoneHref },
  { icon: Mail, label: "Email Us", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Visit Us", value: `${company.address}, ${company.cityState}` },
  { icon: Clock, label: "Hours", value: company.hours },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Get your free estimate"
        description="Tell us about your project and we'll get back to you fast with a no-obligation estimate."
        crumb="Contact"
      />

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((c) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 font-600 text-foreground">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant md:p-9">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <CheckCircle2 className="size-14 text-primary" />
                  <h2 className="font-display text-2xl font-700">Thank you!</h2>
                  <p className="max-w-sm text-muted-foreground">
                    Your request has been received. A member of our team will reach out shortly to
                    schedule your free inspection.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h2 className="font-display text-2xl font-700 text-foreground">
                    Request a free estimate
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(844) 776-6334"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Roofing</option>
                      <option>Roof Repair</option>
                      <option>Roof Replacement</option>
                      <option>Siding</option>
                      <option>Gutters</option>
                      <option>Windows</option>
                      <option>Storm Damage</option>
                      <option>Other Exterior</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <Send /> Get My Free Estimate
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. We respect your privacy and never share your information.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
