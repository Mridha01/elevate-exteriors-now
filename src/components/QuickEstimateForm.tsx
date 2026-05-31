import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services } from "@/lib/site";

interface QuickEstimateFormProps {
  /** Pre-selected service name to default the dropdown. */
  defaultService?: string;
  heading?: string;
  /** Compact removes the project-details textarea for tighter layouts. */
  compact?: boolean;
}

/** Reusable lead-capture form used on service & city landing pages. */
export function QuickEstimateForm({
  defaultService,
  heading = "Request your free estimate",
  compact = false,
}: QuickEstimateFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-9 text-center shadow-elegant">
        <CheckCircle2 className="size-14 text-primary" />
        <h3 className="font-display text-2xl font-700">Thank you!</h3>
        <p className="max-w-sm text-muted-foreground">
          Your request has been received. A member of our team will reach out shortly to schedule your free
          inspection.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 rounded-3xl border border-border bg-card p-7 shadow-elegant md:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="font-display text-2xl font-700 text-foreground">{heading}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qe-name">Full Name</Label>
          <Input id="qe-name" name="name" required placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qe-phone">Phone</Label>
          <Input id="qe-phone" name="phone" type="tel" required placeholder="(844) 776-6334" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="qe-email">Email</Label>
        <Input id="qe-email" name="email" type="email" required placeholder="jane@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="qe-service">Service Needed</Label>
        <select
          id="qe-service"
          name="service"
          defaultValue={defaultService}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Other Exterior</option>
        </select>
      </div>
      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="qe-message">Project Details</Label>
          <Textarea id="qe-message" name="message" rows={4} placeholder="Tell us about your project..." />
        </div>
      )}
      <Button type="submit" variant="hero" size="xl" className="w-full">
        <Send /> Get My Free Estimate
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No obligation. We respect your privacy and never share your information.
      </p>
    </form>
  );
}
