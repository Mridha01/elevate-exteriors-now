import { MapPin } from "lucide-react";
import { company } from "@/lib/site";

interface ServiceAreaMapProps {
  /** Optional city to center the map query on. */
  query?: string;
  className?: string;
}

/** Embedded Google Map for the service coverage area (keyless embed). */
export function ServiceAreaMap({ query, className }: ServiceAreaMapProps) {
  const q = encodeURIComponent(query ?? `${company.cityState}`);
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
        <iframe
          title={`Service area map${query ? ` for ${query}` : ""}`}
          src={`https://www.google.com/maps?q=${q}&z=11&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full md:h-[400px]"
        />
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 text-primary" />
        Proudly serving {query ? `${query} and` : ""} the greater Memphis area.
      </p>
    </div>
  );
}
