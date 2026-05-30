import {
  Home,
  Wrench,
  Hammer,
  Layers,
  Droplets,
  AppWindow,
  CloudLightning,
  PaintRoller,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Precision Roofing & Exteriors",
  shortName: "Precision Roofing",
  legal: "Precision Roofing and Exteriors LLC",
  phoneDisplay: "(844) 776-6334",
  phoneHref: "tel:+18447766334",
  email: "info@precisionroofingandexteriors.com",
  address: "1240 Craftsman Way, Suite 200",
  cityState: "Boise, ID 83702",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  rating: "4.9",
  reviews: "480+",
  yearsExperience: 25,
  tagline: "Trusted Roofing, Siding, Gutters & Exterior Solutions Built To Last.",
};

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "roofing",
    title: "Roofing",
    short: "Durable, code-compliant roofing systems engineered for decades of protection.",
    description:
      "Full-service residential and commercial roofing using premium architectural shingles, metal, and flat-roof systems installed by certified crews.",
    icon: Home,
    features: ["Architectural shingles", "Metal & flat roofing", "Manufacturer-certified"],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, lasting repairs that stop leaks and extend the life of your roof.",
    description:
      "From missing shingles to flashing failures and active leaks, our repair specialists diagnose the root cause and fix it right the first time.",
    icon: Wrench,
    features: ["Leak detection", "Flashing & vent repair", "Same-week service"],
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Complete tear-off and re-roof with premium materials and clean job sites.",
    description:
      "A seamless full replacement experience: protective prep, expert installation, magnetic nail sweep, and a spotless property when we leave.",
    icon: Hammer,
    features: ["Full tear-off & install", "Premium underlayment", "50-yr material options"],
  },
  {
    slug: "siding",
    title: "Siding",
    short: "Beautiful, weather-tough siding that transforms and protects your home.",
    description:
      "Vinyl, fiber cement, and engineered wood siding that boosts curb appeal, insulation, and resale value with precision installation.",
    icon: Layers,
    features: ["Fiber cement & vinyl", "Insulated options", "Boosts curb appeal"],
  },
  {
    slug: "gutters",
    title: "Gutters",
    short: "Seamless gutters and guards that protect your foundation year-round.",
    description:
      "Custom-fabricated seamless gutters, downspouts, and leaf-guard systems that channel water safely away from your home.",
    icon: Droplets,
    features: ["Seamless aluminum", "Leaf-guard systems", "Downspout solutions"],
  },
  {
    slug: "windows",
    title: "Windows",
    short: "Energy-efficient replacement windows that cut bills and noise.",
    description:
      "Modern double- and triple-pane windows professionally installed to improve comfort, efficiency, and the look of your home.",
    icon: AppWindow,
    features: ["Energy-efficient glass", "Custom sizing", "Lifetime warranty options"],
  },
  {
    slug: "storm-damage",
    title: "Storm Damage",
    short: "Rapid storm response with full insurance claim assistance.",
    description:
      "Hail, wind, and storm damage handled end-to-end — emergency tarping, detailed documentation, and expert claim support.",
    icon: CloudLightning,
    features: ["Emergency tarping", "Damage assessment", "Insurance advocacy"],
  },
  {
    slug: "exterior-services",
    title: "Exterior Services",
    short: "Complete exterior renovations from soffit and fascia to trim.",
    description:
      "One trusted team for soffit, fascia, trim, decking, and full exterior makeovers — coordinated for a flawless finished home.",
    icon: PaintRoller,
    features: ["Soffit & fascia", "Trim & decking", "Full exterior makeovers"],
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export const serviceAreas = [
  "Boise",
  "Meridian",
  "Nampa",
  "Eagle",
  "Caldwell",
  "Kuna",
  "Star",
  "Garden City",
  "Middleton",
  "Mountain Home",
];
