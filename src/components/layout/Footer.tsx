import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { company, navLinks, services, serviceAreas } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-ink text-ink-foreground">
      {/* CTA strip */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="-mt-px flex flex-col items-center justify-between gap-6 border-b border-white/10 py-10 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-700">Let's protect your home.</h3>
            <p className="mt-1 text-ink-muted">Free, no-obligation inspections and estimates.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-600 text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Get Free Estimate <ArrowRight className="size-4" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-600 text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Premium roofing, siding, gutters and exterior solutions built to last. Licensed,
            insured, and trusted by homeowners for over {company.yearsExperience} years.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-white/15 text-ink-muted transition-colors hover:border-primary hover:text-white"
                aria-label="Social media"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary-glow">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary-glow">
                Free Estimate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-primary-glow">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-glow" />
              <span>
                {company.address}
                <br />
                {company.cityState}
              </span>
            </li>
            <li>
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 hover:text-primary-glow"
              >
                <Phone className="size-4 shrink-0 text-primary-glow" /> {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-primary-glow"
              >
                <Mail className="size-4 shrink-0 text-primary-glow" /> {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-primary-glow" /> {company.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-xs text-ink-muted">
            <span className="font-600 text-white/80">Service Areas:</span>{" "}
            {serviceAreas.join(" · ")}
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-ink-muted md:flex-row">
            <p>
              © {year} {company.legal}. All rights reserved.
            </p>
            <p>Licensed &amp; Insured · Workmanship Warranty · Free Estimates · Financing Available</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
