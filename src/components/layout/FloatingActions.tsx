import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { company } from "@/lib/site";

/** Floating call + estimate buttons, always reachable on mobile. */
export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 lg:hidden">
      <div className="flex w-full max-w-md gap-3">
        <a
          href={company.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink py-3.5 font-700 text-ink-foreground shadow-elegant"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3.5 font-700 text-primary-foreground shadow-glow"
        >
          <CalendarCheck className="size-4" /> Free Estimate
        </Link>
      </div>
    </div>
  );
}
