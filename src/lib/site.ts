import {
  Home,
  Wrench,
  Hammer,
  Layers,
  Droplets,
  Waves,
  AppWindow,
  Frame,
  CloudLightning,
  PanelTop,
  Siren,
  Search,
  LayoutPanelTop,
  Thermometer,
  ClipboardCheck,
  Wind,
  SquareStack,
  House,
  Building2,
  CalendarCheck,
  Sun,
  Gem,
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
  cityState: "Memphis, TN 38103",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  rating: "4.9",
  reviews: "480+",
  yearsExperience: 25,
  tagline: "Trusted Roofing, Siding, Gutters & Exterior Solutions Built To Last.",
};

export const siteUrl = "https://elevate-exteriors-now.lovable.app";

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export type ServiceCategory = "roofing" | "siding" | "gutters" | "windows";

export interface ServiceItem {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  /** Local-SEO landing label, e.g. "Roofing Contractor" used in city pages. */
  localLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDesc: string;
  overview: string[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  related: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "roofing",
    title: "Roofing",
    category: "roofing",
    localLabel: "Roofing Contractor",
    short: "Durable, code-compliant roofing systems engineered for decades of protection.",
    description:
      "Full-service residential and commercial roofing using premium architectural shingles, metal, and flat-roof systems installed by certified crews.",
    icon: Home,
    features: ["Architectural shingles", "Metal & flat roofing", "Manufacturer-certified"],
    metaTitle: "Roofing Contractor | Architectural, Metal & Flat Roofs",
    metaDescription:
      "Premium residential & commercial roofing. Architectural shingles, metal and flat-roof systems installed by certified crews. Free roofing estimate.",
    heroTitle: "Roofing built to protect for decades",
    heroDesc:
      "Premium materials, certified installation, and a written workmanship warranty on every roof we build.",
    overview: [
      "Your roof is the single most important system protecting your home. Our roofing experts design and install complete roofing systems — not just shingles — including underlayment, ventilation, flashing and ridge details that work together to keep water out and energy bills down.",
      "We install architectural asphalt shingles, standing-seam metal, and modern flat-roof membranes for both residential and commercial properties, all backed by manufacturer certifications and a clean, respectful job site.",
    ],
    benefits: [
      {
        title: "Certified installation",
        desc: "Manufacturer-certified crews protect your material and labor warranty.",
      },
      {
        title: "Premium materials",
        desc: "Architectural, metal and membrane systems rated for 30–50+ years.",
      },
      {
        title: "Energy efficiency",
        desc: "Proper ventilation and reflective options lower attic heat and bills.",
      },
      {
        title: "Written warranty",
        desc: "Workmanship warranty plus full manufacturer material coverage.",
      },
    ],
    process: [
      {
        title: "Free inspection",
        desc: "We assess your roof, decking and ventilation and explain every option.",
      },
      {
        title: "Clear proposal",
        desc: "Transparent, written pricing with material and color choices.",
      },
      {
        title: "Expert installation",
        desc: "Protective prep, precise install, and constant quality checks.",
      },
      {
        title: "Final walkthrough",
        desc: "Magnetic nail sweep, cleanup and a complete quality review with you.",
      },
    ],
    faqs: [
      {
        q: "How long does a new roof last?",
        a: "Architectural shingles typically last 25–30 years, while metal and premium systems can protect your home for 50 years or more with proper installation and ventilation.",
      },
      {
        q: "Do you offer financing for a new roof?",
        a: "Yes. We offer flexible monthly payment plans with competitive rates and fast approval — often with no money down.",
      },
      {
        q: "Can you install a roof in winter?",
        a: "Yes. We install year-round and follow manufacturer cold-weather guidelines to ensure proper sealing and performance.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Absolutely. We are fully licensed and insured for your complete protection on every project.",
      },
    ],
    related: ["roof-replacement", "roof-repair", "storm-damage-repair"],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    category: "roofing",
    localLabel: "Roof Repair",
    short: "Fast, lasting repairs that stop leaks and extend the life of your roof.",
    description:
      "From missing shingles to flashing failures and active leaks, our repair specialists diagnose the root cause and fix it right the first time.",
    icon: Wrench,
    features: ["Leak detection", "Flashing & vent repair", "Same-week service"],
    metaTitle: "Roof Repair | Fast Leak & Shingle Repair Specialists",
    metaDescription:
      "Stop roof leaks fast. Expert roof repair for missing shingles, flashing failures, and active leaks. Same-week service and honest assessments.",
    heroTitle: "Stop the leak. Protect your home.",
    heroDesc:
      "Fast, accurate roof repairs that fix the real problem — not just the symptom — backed by our workmanship guarantee.",
    overview: [
      "A small roof problem can turn into major interior damage fast. Our repair specialists track leaks to their true source — often flashing, valleys, vents or fasteners rather than the obvious spot — and repair it so it stays fixed.",
      "From a handful of missing shingles after a windstorm to chronic leaks around chimneys and skylights, we deliver durable repairs with a fast response and a clear, honest assessment of whether repair or replacement makes more sense.",
    ],
    benefits: [
      {
        title: "Root-cause diagnosis",
        desc: "We find where water really enters, not just where it shows up.",
      },
      {
        title: "Same-week service",
        desc: "Fast scheduling to protect your home before damage spreads.",
      },
      {
        title: "Honest advice",
        desc: "We tell you straight whether a repair or replacement is smarter.",
      },
      {
        title: "Guaranteed work",
        desc: "Every repair is backed by our written workmanship warranty.",
      },
    ],
    process: [
      { title: "Leak inspection", desc: "Thorough diagnosis of the roof, attic and entry points." },
      { title: "Clear estimate", desc: "Straightforward pricing with no surprises or upsells." },
      {
        title: "Precision repair",
        desc: "Quality materials matched to your existing roof system.",
      },
      { title: "Leak test & cleanup", desc: "We verify the fix and leave your property spotless." },
    ],
    faqs: [
      {
        q: "How quickly can you repair my roof?",
        a: "We offer fast, often same-week scheduling, and emergency tarping is available to protect your home immediately after storm damage.",
      },
      {
        q: "Should I repair or replace my roof?",
        a: "It depends on age, extent of damage and decking condition. Our free inspection gives you an honest recommendation with no pressure.",
      },
      {
        q: "Will a repair match my existing shingles?",
        a: "We carefully match materials and color as closely as possible so repairs blend with your current roof.",
      },
      {
        q: "Do you help with insurance claims?",
        a: "Yes. We document storm-related damage and can support your insurance claim from start to finish.",
      },
    ],
    related: ["roof-replacement", "storm-damage-repair", "emergency-roofing"],
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    category: "roofing",
    localLabel: "Roof Replacement",
    short: "Complete tear-off and re-roof with premium materials and clean job sites.",
    description:
      "A seamless full replacement experience: protective prep, expert installation, magnetic nail sweep, and a spotless property when we leave.",
    icon: Hammer,
    features: ["Full tear-off & install", "Premium underlayment", "50-yr material options"],
    metaTitle: "Roof Replacement | Full Tear-Off & Re-Roof Experts",
    metaDescription:
      "Complete roof replacement with premium materials, expert installation, and a spotless job site. 50-year material options and flexible financing.",
    heroTitle: "A new roof, done right in a single day",
    heroDesc:
      "Full tear-off, premium underlayment, and flawless installation by certified crews — most homes completed in one day.",
    overview: [
      "When repairs no longer make sense, a full replacement gives you decades of fresh protection and a major boost in curb appeal and home value. We remove your old roof completely, inspect and repair the decking, and rebuild a complete roofing system from the deck up.",
      "Most residential replacements are completed in a single day with careful property protection, premium underlayment, and a thorough magnetic nail sweep so your home is left cleaner than we found it.",
    ],
    benefits: [
      {
        title: "Full system rebuild",
        desc: "New underlayment, ventilation and flashing — not just shingles.",
      },
      {
        title: "Boosts home value",
        desc: "A new roof improves curb appeal, resale value and insurability.",
      },
      {
        title: "One-day installs",
        desc: "Most homes are completed in a single day with minimal disruption.",
      },
      {
        title: "50-year options",
        desc: "Premium materials engineered for half a century of protection.",
      },
    ],
    process: [
      {
        title: "Inspection & quote",
        desc: "We assess your roof and present clear material and color options.",
      },
      {
        title: "Property protection",
        desc: "Landscaping and exteriors are protected before any tear-off.",
      },
      {
        title: "Tear-off & install",
        desc: "Complete removal, decking repair, and precise new installation.",
      },
      {
        title: "Cleanup & review",
        desc: "Magnetic nail sweep, full cleanup, and a final walkthrough.",
      },
    ],
    faqs: [
      {
        q: "How long does a roof replacement take?",
        a: "Most residential roof replacements are completed in a single day. Larger or complex roofs may take a bit longer — we provide a clear timeline up front.",
      },
      {
        q: "Will you replace damaged decking?",
        a: "Yes. Once the old roof is removed we inspect the decking and replace any damaged or rotted sections before installing your new roof.",
      },
      {
        q: "What financing is available?",
        a: "We offer flexible monthly payment plans with competitive rates and fast approval, often with no money down.",
      },
      {
        q: "How disruptive is the project?",
        a: "We protect your property, work efficiently, and clean thoroughly so most homeowners barely notice the disruption.",
      },
    ],
    related: ["roofing", "roof-repair", "siding-installation"],
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing",
    category: "roofing",
    localLabel: "Emergency Roofer",
    short: "Rapid emergency response and tarping to protect your home around the clock.",
    description:
      "When a storm or sudden leak puts your home at risk, our emergency crews respond fast with tarping and temporary protection to stop further damage.",
    icon: Siren,
    features: ["Rapid response", "Emergency tarping", "Damage documentation"],
    metaTitle: "Emergency Roofing | Rapid Storm & Leak Response",
    metaDescription:
      "Roof emergency? Our crews respond fast with emergency tarping and temporary protection to stop water damage. Insurance documentation included.",
    heroTitle: "Roof emergency? We respond fast.",
    heroDesc:
      "Rapid emergency tarping and protection that stops water damage in its tracks — plus full documentation for your claim.",
    overview: [
      "A sudden leak or storm-torn roof can flood your home within hours. Our emergency roofing team responds quickly to install protective tarping and temporary repairs that stop water intrusion and prevent costly interior damage.",
      "While we secure your home, we document all damage in detail to support your insurance claim, then build a plan for permanent repair or replacement once the emergency is contained.",
    ],
    benefits: [
      {
        title: "Rapid response",
        desc: "Fast dispatch to secure your home and limit water damage.",
      },
      {
        title: "Emergency tarping",
        desc: "Professional temporary protection that holds until permanent repair.",
      },
      {
        title: "Claim documentation",
        desc: "Detailed photos and reports to strengthen your insurance claim.",
      },
      {
        title: "Permanent plan",
        desc: "A clear path to lasting repair or replacement after the emergency.",
      },
    ],
    process: [
      { title: "Call & dispatch", desc: "Reach us and we mobilize a crew to protect your home." },
      { title: "Secure the roof", desc: "Emergency tarping and temporary measures stop the leak." },
      { title: "Document damage", desc: "Thorough records to support your insurance claim." },
      {
        title: "Permanent repair",
        desc: "We schedule lasting repair or replacement once secured.",
      },
    ],
    faqs: [
      {
        q: "How fast can you get to my home?",
        a: "We prioritize emergencies and dispatch crews as quickly as possible to tarp and protect your roof before damage spreads.",
      },
      {
        q: "Will emergency tarping stop the leak?",
        a: "Professional tarping provides reliable temporary protection that keeps water out until a permanent repair can be completed.",
      },
      {
        q: "Do you handle the insurance side?",
        a: "Yes. We document all damage and can work with your adjuster to support a fair, full claim.",
      },
      {
        q: "What should I do while I wait?",
        a: "Move valuables away from the leak, place buckets to catch water, and avoid the affected area until our crew arrives.",
      },
    ],
    related: ["storm-damage-repair", "roof-repair", "roof-replacement"],
  },
  {
    slug: "storm-damage-repair",
    title: "Storm Damage Repair",
    category: "roofing",
    localLabel: "Storm Damage Repair",
    short: "Full storm restoration with expert insurance claim assistance.",
    description:
      "Hail, wind, and storm damage handled end-to-end — emergency tarping, detailed documentation, and expert claim support from start to finish.",
    icon: CloudLightning,
    features: ["Free damage assessment", "Insurance advocacy", "Full restoration"],
    metaTitle: "Storm Damage Repair | Hail & Wind Roof Restoration",
    metaDescription:
      "Hail and wind damage handled end-to-end with expert insurance claim support. Free storm damage assessment and complete exterior restoration.",
    heroTitle: "Storm damage restored, claim handled",
    heroDesc:
      "From free assessment to final restoration, we manage the entire storm-damage process — and advocate for you with your insurer.",
    overview: [
      "Hail and high winds can cause damage that isn't obvious from the ground but seriously shortens your roof's life. Our storm specialists perform a detailed free assessment to identify bruising, cracked shingles, lifted edges and hidden leaks.",
      "We then handle the entire restoration — documenting damage, meeting your adjuster when possible, and advocating to ensure your claim is handled fairly so your home is fully restored.",
    ],
    benefits: [
      {
        title: "Free assessment",
        desc: "A thorough, no-cost inspection to find all storm damage.",
      },
      { title: "Insurance advocacy", desc: "We document and advocate for a fair, complete claim." },
      {
        title: "Full restoration",
        desc: "Roof, siding, gutters and exterior — restored by one team.",
      },
      { title: "Local experts", desc: "We know local storm patterns and what adjusters look for." },
    ],
    process: [
      { title: "Free inspection", desc: "Detailed documentation of all hail and wind damage." },
      { title: "Claim support", desc: "We help file and meet with your adjuster when possible." },
      { title: "Approved scope", desc: "We confirm the approved repairs and material selections." },
      {
        title: "Complete restoration",
        desc: "Expert repair or replacement and a final walkthrough.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I have storm damage?",
        a: "Much hail and wind damage is invisible from the ground. Our free inspection identifies bruising, cracks and lifted shingles before they cause leaks.",
      },
      {
        q: "Will you work with my insurance company?",
        a: "Yes. We document the damage, meet with your adjuster when possible, and advocate to ensure your claim is handled fairly and fully.",
      },
      {
        q: "How long do I have to file a claim?",
        a: "Most policies have a filing window after a storm, so it's best to get inspected promptly. We can help you act before deadlines pass.",
      },
      {
        q: "What if my claim is denied?",
        a: "We can provide detailed documentation and a professional assessment to support a re-inspection or appeal of an unfair denial.",
      },
    ],
    related: ["emergency-roofing", "roof-replacement", "gutter-repair"],
  },
  {
    slug: "siding-installation",
    title: "Siding Installation",
    category: "siding",
    localLabel: "Siding Contractor",
    short: "Beautiful, weather-tough new siding that transforms and protects your home.",
    description:
      "Vinyl, fiber cement, and engineered wood siding that boosts curb appeal, insulation, and resale value with precision installation.",
    icon: Layers,
    features: ["Fiber cement & vinyl", "Insulated options", "Boosts curb appeal"],
    metaTitle: "Siding Installation | Fiber Cement & Vinyl Siding",
    metaDescription:
      "Transform your home with new siding. Fiber cement, vinyl and insulated options installed with precision to boost curb appeal and efficiency.",
    heroTitle: "Siding that transforms and protects",
    heroDesc:
      "Premium fiber cement and vinyl siding, precisely installed to boost curb appeal, comfort and resale value.",
    overview: [
      "New siding is one of the highest-return upgrades you can make — dramatically improving curb appeal while sealing your home against moisture, wind and energy loss. We install premium fiber cement, vinyl and engineered wood in a wide range of styles and colors.",
      "Our crews handle proper moisture barriers, insulation and flashing details so your new siding doesn't just look stunning — it protects and performs for decades.",
    ],
    benefits: [
      {
        title: "Major curb appeal",
        desc: "Refresh your home's entire look with modern colors and textures.",
      },
      {
        title: "Better efficiency",
        desc: "Insulated options reduce drafts and lower energy bills.",
      },
      { title: "Low maintenance", desc: "Durable materials that resist rot, pests and fading." },
      {
        title: "Higher resale",
        desc: "New siding is one of the top return-on-investment upgrades.",
      },
    ],
    process: [
      {
        title: "Design consult",
        desc: "We help you choose materials, styles and colors that fit your home.",
      },
      { title: "Detailed quote", desc: "Clear, written pricing with all materials specified." },
      {
        title: "Precision install",
        desc: "Proper moisture barriers, insulation and flashing details.",
      },
      { title: "Final walkthrough", desc: "Full cleanup and a complete quality review with you." },
    ],
    faqs: [
      {
        q: "Which siding material is best?",
        a: "Fiber cement offers premium durability and a wood-like look, while vinyl is cost-effective and low-maintenance. We'll help you choose based on budget and goals.",
      },
      {
        q: "Will new siding lower my energy bills?",
        a: "Insulated siding options reduce drafts and improve your home's thermal envelope, which can meaningfully lower heating and cooling costs.",
      },
      {
        q: "How long does siding installation take?",
        a: "Most homes are completed within several days depending on size and material. We'll provide a clear timeline before we begin.",
      },
      {
        q: "Can you match my existing siding?",
        a: "Yes, we offer a wide range of colors and profiles and will match new work to your home as closely as possible.",
      },
    ],
    related: ["siding-repair", "window-installation", "gutter-installation"],
  },
  {
    slug: "siding-repair",
    title: "Siding Repair",
    category: "siding",
    localLabel: "Siding Repair",
    short: "Fast siding repairs that restore protection and curb appeal.",
    description:
      "Cracked, warped, or storm-damaged siding repaired and color-matched to restore your home's weather barrier and appearance.",
    icon: PanelTop,
    features: ["Color matching", "Storm damage repair", "Moisture protection"],
    metaTitle: "Siding Repair | Cracked & Storm-Damaged Siding Fixes",
    metaDescription:
      "Expert siding repair for cracked, warped and storm-damaged panels. Color-matched repairs that restore your home's weather barrier and curb appeal.",
    heroTitle: "Restore your siding, protect your home",
    heroDesc:
      "Fast, color-matched siding repairs that seal out moisture and bring back your home's clean, finished look.",
    overview: [
      "Damaged siding is more than a cosmetic problem — cracks, gaps and warping let moisture reach your sheathing and framing, leading to rot and mold. Our team repairs storm, impact and age-related siding damage quickly.",
      "We carefully match materials and color so repairs blend in, and we make sure the moisture barrier behind your siding is restored to keep your home protected.",
    ],
    benefits: [
      {
        title: "Stops moisture",
        desc: "Restores the weather barrier protecting your walls and framing.",
      },
      { title: "Color matched", desc: "Repairs blend seamlessly with your existing siding." },
      { title: "Fast service", desc: "Quick scheduling to prevent further water damage." },
      {
        title: "Storm ready",
        desc: "We repair wind, hail and impact damage and document it for claims.",
      },
    ],
    process: [
      { title: "Assessment", desc: "We inspect the damage and the moisture barrier behind it." },
      {
        title: "Clear estimate",
        desc: "Honest pricing and a recommendation on repair vs. replacement.",
      },
      { title: "Matched repair", desc: "We replace damaged panels and match color and texture." },
      { title: "Cleanup & review", desc: "A tidy finish and a final walkthrough with you." },
    ],
    faqs: [
      {
        q: "Can damaged siding be repaired or must it be replaced?",
        a: "Many issues can be repaired by replacing affected panels. If damage is widespread, we'll honestly advise whether replacement is more cost-effective.",
      },
      {
        q: "Will the repair be noticeable?",
        a: "We match material, profile and color as closely as possible so repairs blend with your existing siding.",
      },
      {
        q: "Do you repair storm-damaged siding?",
        a: "Yes. We repair wind, hail and impact damage and document it to support insurance claims when applicable.",
      },
      {
        q: "How soon should I repair siding?",
        a: "Promptly — gaps and cracks let moisture reach your framing, so quick repair prevents far costlier rot and mold damage.",
      },
    ],
    related: ["siding-installation", "storm-damage-repair", "gutter-repair"],
  },
  {
    slug: "gutters",
    title: "Gutters",
    category: "gutters",
    localLabel: "Gutter Services",
    short: "Seamless gutters and guards that protect your foundation year-round.",
    description:
      "Custom-fabricated seamless gutters, downspouts, and leaf-guard systems that channel water safely away from your home.",
    icon: Droplets,
    features: ["Seamless aluminum", "Leaf-guard systems", "Downspout solutions"],
    metaTitle: "Gutter Services | Seamless Gutters & Leaf Guards",
    metaDescription:
      "Protect your foundation with seamless gutters, downspouts and leaf-guard systems custom-fabricated and installed to channel water safely away.",
    heroTitle: "Gutters that protect your foundation",
    heroDesc:
      "Custom seamless gutters and leaf-guard systems that move water safely away from your roof, siding and foundation.",
    overview: [
      "Gutters are your home's first line of defense against water damage. When they fail, water pools around your foundation, rots fascia, and erodes landscaping. We design complete gutter systems — seamless gutters, properly sized downspouts and leaf guards — tailored to your roofline.",
      "Our seamless aluminum gutters are custom-fabricated on site for a precise fit with fewer leaks, and our leaf-guard options keep them flowing freely with far less maintenance.",
    ],
    benefits: [
      {
        title: "Foundation protection",
        desc: "Channels water away to prevent costly foundation damage.",
      },
      { title: "Seamless fit", desc: "On-site fabrication means fewer joints and fewer leaks." },
      {
        title: "Less maintenance",
        desc: "Leaf-guard systems keep gutters flowing with less cleaning.",
      },
      { title: "Custom design", desc: "Sized and placed for your exact roofline and rainfall." },
    ],
    process: [
      { title: "Roofline review", desc: "We measure your roof and plan optimal water flow." },
      { title: "Custom quote", desc: "Clear pricing for gutters, downspouts and guards." },
      { title: "Seamless install", desc: "On-site fabrication and precise, secure installation." },
      { title: "Flow test", desc: "We verify proper drainage and clean up completely." },
    ],
    faqs: [
      {
        q: "Why choose seamless gutters?",
        a: "Seamless gutters are fabricated on site to fit your home with far fewer joints, which means fewer leaks and a cleaner appearance.",
      },
      {
        q: "Are leaf guards worth it?",
        a: "Yes. Quality leaf-guard systems dramatically reduce clogs and cleaning while keeping water flowing freely, especially under heavy tree cover.",
      },
      {
        q: "How often should gutters be replaced?",
        a: "Well-installed aluminum gutters can last 20 years or more. We'll assess whether cleaning, repair or replacement is the right step.",
      },
      {
        q: "Do clogged gutters really cause damage?",
        a: "Absolutely. Overflowing gutters lead to fascia rot, siding stains, basement leaks and foundation problems — all far costlier than gutter care.",
      },
    ],
    related: ["gutter-installation", "gutter-repair", "roofing"],
  },
  {
    slug: "gutter-installation",
    title: "Gutter Installation",
    category: "gutters",
    localLabel: "Gutter Installation",
    short: "New seamless gutter systems custom-fabricated for a perfect fit.",
    description:
      "Professionally installed seamless gutters, downspouts and guards engineered to handle your roofline and local rainfall.",
    icon: Waves,
    features: ["On-site fabrication", "Custom downspouts", "Guard-ready"],
    metaTitle: "Gutter Installation | New Seamless Gutter Systems",
    metaDescription:
      "New seamless gutter installation custom-fabricated on site. Properly sized downspouts and leaf-guard-ready systems that protect your home.",
    heroTitle: "New seamless gutters, perfectly fit",
    heroDesc:
      "Custom-fabricated seamless gutters and downspouts engineered for your roofline and our local rainfall.",
    overview: [
      "Whether you're building new or replacing failing gutters, a properly engineered system makes all the difference. We fabricate seamless aluminum gutters on site for a precise fit, then install correctly pitched runs and properly placed downspouts to move water where it belongs.",
      "Every installation is sized for your roof area and local rainfall, with leaf-guard-ready options to minimize future maintenance.",
    ],
    benefits: [
      { title: "Seamless aluminum", desc: "Fabricated on site for a precise, leak-resistant fit." },
      { title: "Correct sizing", desc: "Engineered for your roof area and local rainfall volume." },
      {
        title: "Proper drainage",
        desc: "Downspouts placed to carry water safely away from the home.",
      },
      { title: "Guard-ready", desc: "Built to accept leaf-guard systems for easy maintenance." },
    ],
    process: [
      { title: "Measure & plan", desc: "We assess your roofline and plan optimal water flow." },
      { title: "Fabricate on site", desc: "Seamless gutters are cut to fit your home exactly." },
      { title: "Secure install", desc: "Proper pitch, hangers and downspout placement." },
      { title: "Flow test", desc: "We confirm drainage and leave your property clean." },
    ],
    faqs: [
      {
        q: "How long does gutter installation take?",
        a: "Most homes are completed in a single day. We fabricate seamless gutters on site for a precise fit.",
      },
      {
        q: "What size gutters do I need?",
        a: "It depends on your roof area and local rainfall. We size your system to handle heavy downpours without overflow.",
      },
      {
        q: "Can you add leaf guards during installation?",
        a: "Yes. We can install leaf-guard systems with your new gutters to reduce future clogs and cleaning.",
      },
      {
        q: "What gutter material do you use?",
        a: "We primarily install durable seamless aluminum, which resists rust and offers an excellent balance of longevity and value.",
      },
    ],
    related: ["gutters", "gutter-repair", "roof-replacement"],
  },
  {
    slug: "gutter-repair",
    title: "Gutter Repair",
    category: "gutters",
    localLabel: "Gutter Repair",
    short: "Repairs for sagging, leaking, and clogged gutters that protect your home.",
    description:
      "We fix sagging runs, leaking seams, loose downspouts and clogs to restore proper drainage and prevent water damage.",
    icon: Wrench,
    features: ["Seam & leak repair", "Re-securing & re-pitching", "Downspout fixes"],
    metaTitle: "Gutter Repair | Sagging, Leaking & Clogged Gutters",
    metaDescription:
      "Fast gutter repair for sagging runs, leaking seams, loose downspouts and clogs. Restore proper drainage and protect your home from water damage.",
    heroTitle: "Restore proper gutter drainage",
    heroDesc:
      "Fast repairs for sagging, leaking and clogged gutters that get water flowing safely away from your home again.",
    overview: [
      "Failing gutters quietly cause some of the most expensive home damage — foundation cracks, basement leaks and rotted fascia. We repair sagging runs, leaking seams, loose hangers and clogged downspouts to restore proper drainage.",
      "Our team re-pitches and re-secures gutters, seals leaks, and clears blockages so your system protects your home the way it should.",
    ],
    benefits: [
      {
        title: "Stops overflow",
        desc: "Repairs restore proper flow to protect siding and foundation.",
      },
      {
        title: "Seam sealing",
        desc: "We seal leaks and reconnect joints for a watertight system.",
      },
      {
        title: "Re-secure & re-pitch",
        desc: "Correcting sag and pitch keeps water moving to downspouts.",
      },
      { title: "Fast turnaround", desc: "Quick scheduling before the next heavy rain." },
    ],
    process: [
      { title: "Inspection", desc: "We identify leaks, sag, clogs and loose components." },
      { title: "Estimate", desc: "Honest pricing and a repair-vs-replace recommendation." },
      { title: "Repair", desc: "Seal, re-secure, re-pitch and clear blockages." },
      { title: "Flow test", desc: "We confirm proper drainage and clean up." },
    ],
    faqs: [
      {
        q: "Can my gutters be repaired or do I need new ones?",
        a: "Many problems — leaks, sag, loose downspouts — are easily repaired. If gutters are widely corroded, we'll honestly recommend replacement.",
      },
      {
        q: "Why are my gutters overflowing?",
        a: "Usually clogs, improper pitch, or undersized gutters. We diagnose the cause and restore proper flow.",
      },
      {
        q: "Do you clear clogs too?",
        a: "Yes. We clear blockages in gutters and downspouts as part of restoring proper drainage.",
      },
      {
        q: "How fast can you come out?",
        a: "We offer quick scheduling, especially ahead of forecast storms, to protect your home from water damage.",
      },
    ],
    related: ["gutters", "gutter-installation", "storm-damage-repair"],
  },
  {
    slug: "window-installation",
    title: "Window Installation",
    category: "windows",
    localLabel: "Window Installation",
    short: "Energy-efficient new windows that cut bills and elevate your home.",
    description:
      "Modern double- and triple-pane windows professionally installed to improve comfort, efficiency, and the look of your home.",
    icon: AppWindow,
    features: ["Energy-efficient glass", "Custom sizing", "Professional install"],
    metaTitle: "Window Installation | Energy-Efficient New Windows",
    metaDescription:
      "Professional window installation with energy-efficient double- and triple-pane glass. Custom-sized windows that cut bills and boost comfort.",
    heroTitle: "Windows that cut bills and noise",
    heroDesc:
      "Energy-efficient, custom-fit windows professionally installed to improve comfort, lower bills and elevate your home.",
    overview: [
      "Modern windows do far more than let in light — they seal your home against drafts, cut energy bills, reduce outside noise and transform your home's appearance. We install energy-efficient double- and triple-pane windows custom-sized to your openings.",
      "Proper installation is everything: we ensure square, level, fully sealed and insulated fits so your new windows perform exactly as they should.",
    ],
    benefits: [
      {
        title: "Lower energy bills",
        desc: "Efficient glass and tight seals reduce heating and cooling costs.",
      },
      { title: "More comfort", desc: "Fewer drafts and hot spots throughout your home." },
      { title: "Quieter rooms", desc: "Insulated glass cuts outside noise significantly." },
      { title: "Fresh look", desc: "New windows instantly modernize your home inside and out." },
    ],
    process: [
      {
        title: "Measure & select",
        desc: "Precise measurements and help choosing styles and glass.",
      },
      { title: "Clear quote", desc: "Transparent pricing with all options specified." },
      { title: "Professional install", desc: "Square, level, sealed and fully insulated fits." },
      { title: "Final review", desc: "We test operation, clean up and walk through with you." },
    ],
    faqs: [
      {
        q: "Will new windows really lower my bills?",
        a: "Yes. Energy-efficient glass and a properly sealed installation reduce drafts and heat transfer, which can meaningfully cut energy costs.",
      },
      {
        q: "Double-pane or triple-pane?",
        a: "Double-pane suits most homes, while triple-pane adds extra efficiency and sound reduction in harsh climates or noisy locations.",
      },
      {
        q: "How long does installation take?",
        a: "Many window projects are completed in a day or two depending on the number of windows. We'll provide a clear timeline up front.",
      },
      {
        q: "Do you install custom sizes?",
        a: "Yes. We measure precisely and order windows custom-sized to your existing openings for a perfect fit.",
      },
    ],
    related: ["window-replacement", "siding-installation", "roofing"],
  },
  {
    slug: "window-replacement",
    title: "Window Replacement",
    category: "windows",
    localLabel: "Window Replacement",
    short: "Replace drafty, failing windows with efficient, modern units.",
    description:
      "Swap out old, drafty, or foggy windows for energy-efficient replacements that improve comfort, efficiency and curb appeal.",
    icon: Frame,
    features: ["Replace drafty windows", "Foggy-glass solutions", "Lifetime warranty options"],
    metaTitle: "Window Replacement | Replace Drafty & Foggy Windows",
    metaDescription:
      "Replace drafty, foggy or failing windows with energy-efficient modern units. Improve comfort, efficiency and curb appeal with lifetime warranty options.",
    heroTitle: "Replace drafty windows for good",
    heroDesc:
      "Upgrade old, foggy or failing windows to efficient modern units that improve comfort, efficiency and curb appeal.",
    overview: [
      "Old windows with broken seals, fogging between panes, or drafts you can feel are quietly costing you money and comfort. Window replacement swaps those failing units for modern, energy-efficient windows that seal tight and operate smoothly.",
      "We remove your old windows, correct any frame issues, and install efficient replacements with proper insulation and sealing — often with lifetime warranty options on the units.",
    ],
    benefits: [
      { title: "End the drafts", desc: "Tight new seals stop the drafts old windows let in." },
      {
        title: "Clear views again",
        desc: "Replace foggy, seal-failed glass with crisp, clear panes.",
      },
      {
        title: "Energy savings",
        desc: "Efficient units lower heating and cooling costs year-round.",
      },
      { title: "Warranty options", desc: "Lifetime warranty options available on quality units." },
    ],
    process: [
      { title: "Assessment", desc: "We evaluate your existing windows and openings." },
      { title: "Selection & quote", desc: "Choose styles and glass with clear, written pricing." },
      {
        title: "Removal & install",
        desc: "Old units out, frames corrected, new windows sealed in.",
      },
      {
        title: "Final walkthrough",
        desc: "We test operation, clean up and review the work with you.",
      },
    ],
    faqs: [
      {
        q: "When should I replace rather than repair windows?",
        a: "If windows are drafty, fogging between panes, hard to operate, or single-pane, replacement usually delivers far better comfort and energy savings than repair.",
      },
      {
        q: "Why are my windows foggy inside the glass?",
        a: "Fogging between panes means the seal has failed and the insulating gas has escaped. The unit should be replaced to restore efficiency and clarity.",
      },
      {
        q: "Will replacement windows match my home?",
        a: "Yes. We offer a wide range of styles, colors and grille options to complement your home's architecture.",
      },
      {
        q: "Is there a warranty?",
        a: "Yes. We offer lifetime warranty options on quality window units plus our workmanship guarantee on the installation.",
      },
    ],
    related: ["window-installation", "siding-repair", "roof-replacement"],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    category: "roofing",
    localLabel: "Roof Leak Detection",
    short: "Pinpoint the true source of roof leaks before they cause costly damage.",
    description:
      "Advanced moisture mapping and infrared inspection to locate hidden roof leaks at their real entry point — not just where the stain appears.",
    icon: Search,
    features: ["Infrared moisture mapping", "Attic & interior tracing", "Detailed leak report"],
    metaTitle: "Roof Leak Detection | Find & Stop Hidden Leaks",
    metaDescription:
      "Professional roof leak detection using infrared and moisture mapping to pinpoint hidden leaks at the source. Stop water damage before it spreads.",
    heroTitle: "Find the leak before it finds your home",
    heroDesc:
      "Precision leak detection that traces water to its true source so the repair actually lasts.",
    overview: [
      "Water is deceptive — a stain on your ceiling is often feet away from where water actually enters your roof. Our leak-detection specialists use infrared scanning, moisture meters and careful attic tracing to follow water back to its real entry point.",
      "By diagnosing the true cause — whether it's failed flashing, a cracked boot, a valley issue or nail pops — we make sure the repair solves the problem the first time instead of chasing symptoms.",
    ],
    benefits: [
      {
        title: "True-source diagnosis",
        desc: "We find where water really enters, not just where it shows.",
      },
      {
        title: "Non-invasive tools",
        desc: "Infrared and moisture meters locate leaks without tearing up your roof.",
      },
      { title: "Detailed report", desc: "Clear documentation with photos of every problem area." },
      {
        title: "Prevents big damage",
        desc: "Early detection stops rot, mold and structural damage.",
      },
      { title: "Insurance-ready", desc: "Findings documented to support storm or damage claims." },
    ],
    process: [
      {
        title: "Interior review",
        desc: "We inspect stains, the attic and entry points from inside.",
      },
      { title: "Roof scan", desc: "Infrared and moisture mapping across the roof surface." },
      { title: "Pinpoint source", desc: "We isolate the exact failure causing the leak." },
      { title: "Repair plan", desc: "A clear, prioritized plan to fix it for good." },
    ],
    faqs: [
      {
        q: "Why is my ceiling stain far from the actual leak?",
        a: "Water travels along decking and rafters before dripping, so the stain is often well away from the true entry point. That's why professional tracing matters.",
      },
      {
        q: "How do you detect leaks without damaging my roof?",
        a: "We use non-invasive infrared cameras and moisture meters to map wet areas, plus attic tracing, before recommending any repair.",
      },
      {
        q: "Can you find a leak even if it's not raining?",
        a: "Yes. We can perform controlled water testing and use moisture readings to locate active and intermittent leaks.",
      },
      {
        q: "Will you fix the leak too?",
        a: "Absolutely. Detection is the first step — we provide a clear repair plan and complete the work with our workmanship warranty.",
      },
      {
        q: "How much does leak detection cost?",
        a: "It depends on roof size and complexity. We provide transparent pricing up front and often credit it toward the repair.",
      },
      {
        q: "Do you document findings for insurance?",
        a: "Yes. We provide a detailed report with photos that can support an insurance claim when damage is storm-related.",
      },
    ],
    related: ["roof-repair", "roof-inspection", "storm-damage-repair"],
  },
  {
    slug: "flat-roof-installation",
    title: "Flat Roof Installation",
    category: "roofing",
    localLabel: "Flat Roof Contractor",
    short: "Durable, watertight flat-roof systems for modern homes and commercial buildings.",
    description:
      "Professional installation of TPO, EPDM and modified-bitumen flat-roof membranes engineered for ponding resistance and decades of protection.",
    icon: LayoutPanelTop,
    features: ["TPO & EPDM membranes", "Proper drainage design", "Commercial & residential"],
    metaTitle: "Flat Roof Installation | TPO & EPDM Membrane Systems",
    metaDescription:
      "Expert flat roof installation with TPO, EPDM and modified-bitumen membranes. Watertight, energy-efficient systems with proper drainage for homes and businesses.",
    heroTitle: "Flat roofs built watertight to last",
    heroDesc:
      "Energy-efficient membrane systems installed with proper slope and drainage so water never has a chance to pool.",
    overview: [
      "Flat and low-slope roofs demand specialized materials and meticulous installation. We install premium TPO, EPDM and modified-bitumen membrane systems for modern homes, additions and commercial buildings.",
      "The difference is in the details: tapered insulation for positive drainage, fully sealed seams, and reinforced flashing at every penetration so your flat roof stays dry and energy efficient for decades.",
    ],
    benefits: [
      {
        title: "Watertight seams",
        desc: "Heat-welded and sealed seams eliminate the most common leak points.",
      },
      {
        title: "Proper drainage",
        desc: "Tapered insulation prevents ponding and extends roof life.",
      },
      {
        title: "Energy efficient",
        desc: "Reflective membranes lower cooling costs on sun-exposed roofs.",
      },
      { title: "Low maintenance", desc: "Modern membranes resist UV, weather and foot traffic." },
      {
        title: "Versatile",
        desc: "Ideal for additions, garages, modern homes and commercial buildings.",
      },
    ],
    process: [
      { title: "Roof assessment", desc: "We evaluate slope, drainage and the existing deck." },
      {
        title: "System design",
        desc: "We specify the right membrane and insulation for your building.",
      },
      {
        title: "Professional install",
        desc: "Sealed seams, reinforced flashing and proper slope.",
      },
      {
        title: "Water test & review",
        desc: "We confirm drainage and walk the finished roof with you.",
      },
    ],
    faqs: [
      {
        q: "What is the best flat roof material?",
        a: "TPO and EPDM are both excellent. TPO offers reflective energy savings, while EPDM is highly durable and flexible. We recommend the best fit for your building and budget.",
      },
      {
        q: "How long does a flat roof last?",
        a: "A professionally installed membrane flat roof typically lasts 20–30 years with proper drainage and minimal maintenance.",
      },
      {
        q: "Why does my flat roof pool water?",
        a: "Ponding usually means inadequate slope or clogged drainage. We install tapered insulation to create positive drainage and eliminate standing water.",
      },
      {
        q: "Can a flat roof be installed on a home?",
        a: "Yes. Flat and low-slope membranes are ideal for modern homes, additions, porches and garages — not just commercial buildings.",
      },
      {
        q: "Are flat roofs energy efficient?",
        a: "Reflective membranes like white TPO reduce heat absorption and can meaningfully lower cooling costs in sunny climates.",
      },
      {
        q: "Do you install commercial flat roofs?",
        a: "Yes. We handle both residential and commercial flat-roof installation with systems sized for the building's needs.",
      },
    ],
    related: ["commercial-roofing", "roof-replacement", "roof-inspection"],
  },
  {
    slug: "roof-insulation",
    title: "Roof Insulation",
    category: "roofing",
    localLabel: "Roof Insulation",
    short: "Boost comfort and slash energy bills with proper roof and attic insulation.",
    description:
      "Professional roof and attic insulation that stabilizes indoor temperatures, prevents ice dams, and dramatically reduces heating and cooling costs.",
    icon: Thermometer,
    features: ["Attic & roofline insulation", "Ice-dam prevention", "Energy savings"],
    metaTitle: "Roof Insulation | Attic Insulation & Energy Savings",
    metaDescription:
      "Professional roof and attic insulation that lowers energy bills, improves comfort and prevents ice dams. Stabilize your home's temperature year-round.",
    heroTitle: "Insulation that pays for itself",
    heroDesc:
      "Proper roof and attic insulation keeps your home comfortable year-round and cuts heating and cooling costs.",
    overview: [
      "Up to a quarter of a home's heat loss escapes through an under-insulated roof. Proper roof and attic insulation is one of the highest-return upgrades you can make — improving comfort, lowering bills and protecting your roof from ice dams.",
      "We assess your current insulation, ventilation and air sealing, then install the right R-value system so your home holds temperature in every season without overworking your HVAC.",
    ],
    benefits: [
      { title: "Lower energy bills", desc: "Stops heat loss in winter and heat gain in summer." },
      { title: "Even comfort", desc: "Eliminates hot and cold rooms throughout your home." },
      {
        title: "Ice-dam defense",
        desc: "Proper insulation and ventilation prevent damaging ice dams.",
      },
      { title: "Quieter home", desc: "Added insulation also dampens outside noise." },
      {
        title: "Protects your roof",
        desc: "Balanced temperature and airflow extend shingle life.",
      },
    ],
    process: [
      { title: "Energy assessment", desc: "We evaluate insulation, ventilation and air leaks." },
      { title: "Custom plan", desc: "We recommend the right R-value and approach for your home." },
      { title: "Clean install", desc: "We air-seal and install insulation to spec." },
      { title: "Final check", desc: "We verify coverage and tidy up completely." },
    ],
    faqs: [
      {
        q: "How do I know if my roof needs more insulation?",
        a: "Signs include high energy bills, uneven room temperatures, ice dams in winter and a hot attic in summer. A quick assessment confirms what you need.",
      },
      {
        q: "Will insulation really lower my energy bills?",
        a: "Yes. Proper roof and attic insulation is one of the most cost-effective efficiency upgrades, often paying for itself in energy savings over time.",
      },
      {
        q: "Does insulation help prevent ice dams?",
        a: "Absolutely. Combined with proper ventilation, insulation keeps the roof deck cold and even, which prevents the melt-refreeze cycle that causes ice dams.",
      },
      {
        q: "What insulation type do you use?",
        a: "We select the best material and R-value for your home, whether blown-in, batt or a combination, based on your attic and goals.",
      },
      {
        q: "Do I need ventilation with insulation?",
        a: "Yes. Insulation and ventilation work together — we make sure airflow is balanced so moisture doesn't get trapped.",
      },
      {
        q: "Is roof insulation messy to install?",
        a: "We protect your home, work cleanly and fully clean up afterward, so installation is fast and hassle-free.",
      },
    ],
    related: ["roof-ventilation", "roof-inspection", "roofing"],
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    category: "roofing",
    localLabel: "Roof Inspection",
    short: "Thorough, honest roof inspections that catch problems before they get expensive.",
    description:
      "A comprehensive, multi-point roof inspection with photo documentation — perfect for maintenance, home sales, or after a storm.",
    icon: ClipboardCheck,
    features: ["Multi-point inspection", "Photo documentation", "Honest recommendations"],
    metaTitle: "Roof Inspection | Thorough Multi-Point Roof Checkups",
    metaDescription:
      "Comprehensive roof inspection with photo documentation. Catch leaks, storm damage and wear early. Ideal for maintenance, home sales and insurance claims.",
    heroTitle: "Know the real condition of your roof",
    heroDesc:
      "A detailed, no-pressure inspection with photos so you understand exactly what your roof needs — and what it doesn't.",
    overview: [
      "Most roof problems are invisible from the ground until they become expensive. Our comprehensive inspection examines shingles, flashing, valleys, vents, gutters and the attic for early signs of wear, leaks and storm damage.",
      "You receive clear, photo-documented findings and an honest recommendation — whether that's routine maintenance, a targeted repair, or simply peace of mind that your roof is in great shape.",
    ],
    benefits: [
      {
        title: "Catch issues early",
        desc: "Find small problems before they turn into costly damage.",
      },
      { title: "Photo documentation", desc: "See exactly what we see with clear, labeled photos." },
      {
        title: "Honest advice",
        desc: "No scare tactics — just a straight assessment of your roof.",
      },
      { title: "Sale-ready", desc: "Ideal for buyers, sellers and pre-listing peace of mind." },
      { title: "Claim support", desc: "Storm-damage documentation to support insurance claims." },
    ],
    process: [
      {
        title: "Exterior inspection",
        desc: "We assess shingles, flashing, valleys, vents and penetrations.",
      },
      { title: "Attic & interior", desc: "We check for moisture, ventilation and decking issues." },
      { title: "Photo report", desc: "Clear documentation of findings and their severity." },
      { title: "Recommendations", desc: "An honest, prioritized plan — no pressure." },
    ],
    faqs: [
      {
        q: "How often should I have my roof inspected?",
        a: "We recommend a professional inspection at least once a year and always after a major storm to catch damage early.",
      },
      {
        q: "What's included in a roof inspection?",
        a: "We inspect shingles, flashing, valleys, vents, gutters and the attic, then provide a photo-documented report with honest recommendations.",
      },
      {
        q: "Do I need an inspection before selling my home?",
        a: "Yes, a pre-listing inspection reassures buyers and helps avoid surprises during the sale. We provide documentation you can share.",
      },
      {
        q: "Will you try to upsell me a new roof?",
        a: "Never. We give honest findings — if your roof just needs maintenance or a small repair, that's exactly what we'll tell you.",
      },
      {
        q: "Can an inspection help with an insurance claim?",
        a: "Yes. After a storm we document damage in detail, which strengthens your claim with the adjuster.",
      },
      {
        q: "How long does an inspection take?",
        a: "Most residential inspections take under an hour, after which we review the photo report and findings with you.",
      },
    ],
    related: ["roof-repair", "leak-detection", "roof-maintenance"],
  },
  {
    slug: "roof-ventilation",
    title: "Roof Ventilation",
    category: "roofing",
    localLabel: "Roof Ventilation",
    short: "Balanced attic ventilation that extends roof life and lowers energy bills.",
    description:
      "Proper intake and exhaust ventilation — ridge vents, soffit vents and more — to control attic heat and moisture and protect your roof system.",
    icon: Wind,
    features: ["Ridge & soffit vents", "Moisture control", "Extends shingle life"],
    metaTitle: "Roof Ventilation | Ridge & Attic Ventilation Systems",
    metaDescription:
      "Professional roof and attic ventilation with balanced intake and exhaust. Control heat and moisture, prevent ice dams and extend the life of your roof.",
    heroTitle: "Let your roof breathe",
    heroDesc:
      "Balanced attic ventilation that controls heat and moisture, lowers energy bills and adds years to your roof.",
    overview: [
      "A roof that can't breathe traps heat and moisture, baking shingles from below and inviting mold, rot and ice dams. Proper ventilation balances fresh-air intake at the soffits with exhaust at the ridge to keep your attic dry and temperate.",
      "We design and install complete ventilation systems — ridge vents, soffit vents, box vents and more — matched to your roof's size and design so it performs efficiently in every season.",
    ],
    benefits: [
      { title: "Cooler attic", desc: "Exhausts trapped heat that drives up cooling bills." },
      { title: "Moisture control", desc: "Prevents condensation, mold and decking rot." },
      { title: "Longer roof life", desc: "Stops shingles from cooking and aging prematurely." },
      { title: "Ice-dam defense", desc: "Even roof temperatures help prevent winter ice dams." },
      { title: "Better efficiency", desc: "Eases the load on your heating and cooling system." },
    ],
    process: [
      { title: "Airflow assessment", desc: "We evaluate intake, exhaust and attic conditions." },
      { title: "Balanced design", desc: "We size intake and exhaust for proper airflow." },
      { title: "Vent installation", desc: "Ridge, soffit and box vents installed cleanly." },
      { title: "Performance check", desc: "We confirm balanced airflow and tidy up." },
    ],
    faqs: [
      {
        q: "Why is roof ventilation important?",
        a: "It controls attic heat and moisture, which protects your shingles, prevents mold and ice dams, and lowers energy bills.",
      },
      {
        q: "What are signs of poor ventilation?",
        a: "A hot attic, high cooling bills, moisture or frost in the attic, mold smell and premature shingle aging all point to poor ventilation.",
      },
      {
        q: "What's the difference between intake and exhaust vents?",
        a: "Intake vents (usually at the soffits) draw in fresh air, while exhaust vents (usually at the ridge) release hot air. Balance between them is key.",
      },
      {
        q: "Will better ventilation lower my energy bills?",
        a: "Yes. By exhausting trapped heat, proper ventilation reduces cooling costs and eases the load on your HVAC system.",
      },
      {
        q: "Can ventilation prevent ice dams?",
        a: "Combined with insulation, balanced ventilation keeps the roof deck cold and even, which helps prevent the melting that causes ice dams.",
      },
      {
        q: "Do you add ventilation during a re-roof?",
        a: "Yes. A roof replacement is the ideal time to correct and upgrade ventilation as part of the complete system.",
      },
    ],
    related: ["roof-insulation", "roof-inspection", "roof-replacement"],
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing",
    category: "roofing",
    localLabel: "Metal Roofing Contractor",
    short: "Premium standing-seam and metal roofing built to last 50 years or more.",
    description:
      "Beautiful, energy-efficient standing-seam and metal roofing systems that resist fire, wind and weather while boosting your home's value.",
    icon: SquareStack,
    features: ["Standing-seam panels", "50+ year lifespan", "Energy efficient"],
    metaTitle: "Metal Roofing | Standing-Seam & Metal Roof Installation",
    metaDescription:
      "Premium metal roofing installation. Durable, energy-efficient standing-seam systems that last 50+ years and resist fire, wind and weather. Free estimate.",
    heroTitle: "Metal roofing that lasts a lifetime",
    heroDesc:
      "Striking, energy-efficient standing-seam systems engineered to outlast and outperform traditional roofing.",
    overview: [
      "Metal roofing is the premium choice for homeowners who want lasting protection and modern curb appeal. Standing-seam and metal systems shrug off wind, fire and heavy weather while lasting 50 years or more — often two to three times longer than asphalt.",
      "We install architectural metal roofing with concealed fasteners, precise flashing and reflective finishes that cut cooling costs and elevate your home's appearance for decades.",
    ],
    benefits: [
      {
        title: "50+ year lifespan",
        desc: "Far outlasts asphalt — often a once-in-a-lifetime roof.",
      },
      {
        title: "Energy efficient",
        desc: "Reflective finishes reduce attic heat and cooling bills.",
      },
      { title: "Weather & fire resistant", desc: "Stands up to wind, hail, fire and heavy snow." },
      { title: "Low maintenance", desc: "Resists rot, insects and cracking with minimal upkeep." },
      { title: "Striking curb appeal", desc: "Clean, modern lines that boost home value." },
    ],
    process: [
      { title: "Consultation", desc: "We help you choose panel profiles, colors and finishes." },
      { title: "Precise measuring", desc: "Custom panels are sized for your exact roofline." },
      { title: "Expert install", desc: "Concealed fasteners and weather-tight flashing details." },
      { title: "Final walkthrough", desc: "Cleanup, inspection and a quality review with you." },
    ],
    faqs: [
      {
        q: "How long does a metal roof last?",
        a: "A quality metal roof commonly lasts 50 years or more — often two to three times the lifespan of asphalt shingles.",
      },
      {
        q: "Is a metal roof noisy when it rains?",
        a: "No. Installed over solid decking and underlayment, a modern metal roof is no louder than other roofing materials.",
      },
      {
        q: "Is metal roofing energy efficient?",
        a: "Yes. Reflective metal finishes bounce away solar heat, reducing attic temperatures and lowering cooling costs.",
      },
      {
        q: "Does metal roofing cost more than shingles?",
        a: "Metal has a higher upfront cost but a much longer lifespan and lower maintenance, making it an excellent long-term value.",
      },
      {
        q: "Will a metal roof rust?",
        a: "Modern metal roofing uses coated steel or aluminum engineered to resist corrosion for decades.",
      },
      {
        q: "Can metal roofing handle snow and hail?",
        a: "Yes. Metal sheds snow easily and is highly resistant to hail and wind, making it ideal for harsh climates.",
      },
    ],
    related: ["roof-replacement", "residential-roofing", "roofing"],
  },
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    category: "roofing",
    localLabel: "Residential Roofer",
    short: "Complete roofing for homes — repair, replacement and new construction.",
    description:
      "Trusted residential roofing for single-family homes, from shingle repairs and full replacements to premium upgrades, all backed by a written warranty.",
    icon: House,
    features: ["Repairs & replacement", "Shingle, metal & flat", "Written warranty"],
    metaTitle: "Residential Roofing | Home Roof Repair & Replacement",
    metaDescription:
      "Trusted residential roofing for homes: repair, replacement and premium upgrades in shingle, metal and flat systems. Licensed, insured, free estimates.",
    heroTitle: "Roofing for the home you love",
    heroDesc:
      "From quick repairs to full replacements, we protect families with premium materials and craftsmanship you can trust.",
    overview: [
      "Your home is your biggest investment, and your roof protects everything under it. We specialize in residential roofing for single-family homes — diagnosing issues honestly and delivering durable repairs, replacements and upgrades that fit your home and budget.",
      "Whether you need a handful of shingles replaced after a storm or a complete new roof, our certified crews treat your home with respect, protect your property, and leave it cleaner than we found it.",
    ],
    benefits: [
      {
        title: "Whole-home expertise",
        desc: "Roofing, ventilation and flashing handled as one system.",
      },
      {
        title: "Premium materials",
        desc: "Architectural shingle, metal and flat options for any home.",
      },
      { title: "Boosts home value", desc: "A quality roof improves curb appeal and resale value." },
      { title: "Respectful crews", desc: "Property protection and thorough cleanup on every job." },
      { title: "Written warranty", desc: "Workmanship and full manufacturer material coverage." },
    ],
    process: [
      { title: "Free inspection", desc: "We assess your roof and explain every option clearly." },
      { title: "Clear proposal", desc: "Transparent pricing with material and color choices." },
      { title: "Expert installation", desc: "Protective prep, precise work and quality checks." },
      { title: "Final walkthrough", desc: "Nail sweep, cleanup and a complete review with you." },
    ],
    faqs: [
      {
        q: "How do I know if I need a repair or a full replacement?",
        a: "It depends on your roof's age, the extent of damage and the decking condition. Our free inspection gives you an honest recommendation with no pressure.",
      },
      {
        q: "What roofing material is best for my home?",
        a: "Architectural shingles suit most homes, while metal offers maximum longevity and flat systems fit modern designs. We'll help you choose based on your goals and budget.",
      },
      {
        q: "How long does a residential roof replacement take?",
        a: "Most homes are completed in a single day, with larger or complex roofs taking a bit longer. We provide a clear timeline up front.",
      },
      {
        q: "Do you offer financing?",
        a: "Yes. We offer flexible monthly payment plans with competitive rates and fast approval, often with no money down.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Absolutely. We are fully licensed and insured for your complete protection on every residential project.",
      },
      {
        q: "Will you help with my insurance claim?",
        a: "Yes. We document storm damage and support your insurance claim from inspection through restoration.",
      },
    ],
    related: ["roof-replacement", "roof-repair", "metal-roofing"],
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    category: "roofing",
    localLabel: "Commercial Roofing Contractor",
    short: "Reliable flat and low-slope roofing systems for businesses and properties.",
    description:
      "Commercial roofing for offices, retail, warehouses and multi-family buildings — TPO, EPDM and metal systems installed with minimal disruption.",
    icon: Building2,
    features: ["TPO, EPDM & metal", "Low-disruption installs", "Maintenance programs"],
    metaTitle: "Commercial Roofing | Flat & Low-Slope Roof Systems",
    metaDescription:
      "Commercial roofing for offices, retail and warehouses. Durable TPO, EPDM and metal systems installed with minimal disruption. Free commercial estimate.",
    heroTitle: "Commercial roofing that protects business",
    heroDesc:
      "Durable, energy-efficient roof systems installed on schedule and with minimal disruption to your operations.",
    overview: [
      "Your roof protects your inventory, equipment and the people inside. We deliver commercial roofing for offices, retail centers, warehouses and multi-family properties — installing and restoring TPO, EPDM, modified-bitumen and metal systems built for long service life.",
      "We work around your operations to minimize downtime, and we offer proactive maintenance programs that catch small issues before they become costly emergencies.",
    ],
    benefits: [
      {
        title: "Built for scale",
        desc: "Systems engineered for large, low-slope commercial roofs.",
      },
      { title: "Minimal disruption", desc: "We schedule around your business to limit downtime." },
      { title: "Energy savings", desc: "Reflective membranes cut cooling costs on big roofs." },
      { title: "Maintenance plans", desc: "Proactive care that extends roof life and budgets." },
      { title: "Documented work", desc: "Detailed reporting for owners and property managers." },
    ],
    process: [
      { title: "Site assessment", desc: "We evaluate the roof, drainage and access." },
      { title: "Scope & proposal", desc: "A clear plan and pricing sized to your building." },
      { title: "Scheduled install", desc: "Work phased to minimize operational impact." },
      { title: "Inspection & report", desc: "Final review and documentation for your records." },
    ],
    faqs: [
      {
        q: "What commercial roof systems do you install?",
        a: "We install and restore TPO, EPDM, modified-bitumen and metal systems, selecting the best fit for your building and budget.",
      },
      {
        q: "Can you work without shutting down my business?",
        a: "Yes. We phase and schedule work to minimize disruption so your operations keep running during the project.",
      },
      {
        q: "Do you offer maintenance programs?",
        a: "Yes. Our proactive maintenance plans catch small issues early, extending roof life and protecting your budget.",
      },
      {
        q: "How long does a commercial roof last?",
        a: "A professionally installed membrane roof typically lasts 20–30 years with proper drainage and routine maintenance.",
      },
      {
        q: "Can you restore rather than replace my roof?",
        a: "Often, yes. If the deck is sound, a restoration or recover system can extend roof life at lower cost than full replacement.",
      },
      {
        q: "Do you provide documentation for property managers?",
        a: "Absolutely. We provide detailed inspection reports, photos and scope documentation for owners and managers.",
      },
    ],
    related: ["flat-roof-installation", "roof-maintenance", "roof-replacement"],
  },
  {
    slug: "roof-maintenance",
    title: "Roof Maintenance",
    category: "roofing",
    localLabel: "Roof Maintenance",
    short: "Proactive maintenance that extends roof life and prevents costly surprises.",
    description:
      "Scheduled roof maintenance — cleaning, sealing, minor repairs and tune-ups — that protects your investment and maximizes your roof's lifespan.",
    icon: CalendarCheck,
    features: ["Seasonal tune-ups", "Sealant & minor repair", "Debris & gutter clearing"],
    metaTitle: "Roof Maintenance | Tune-Ups That Extend Roof Life",
    metaDescription:
      "Proactive roof maintenance to extend your roof's life and prevent costly repairs. Seasonal tune-ups, sealing, debris clearing and minor fixes.",
    heroTitle: "Make your roof last longer",
    heroDesc:
      "Affordable, proactive maintenance that catches small issues early and protects your roof for years to come.",
    overview: [
      "The most cost-effective roof is one that's well maintained. Regular maintenance catches loose flashing, worn sealant, minor leaks and debris buildup before they turn into expensive damage — often adding years to your roof's life.",
      "Our maintenance visits include a thorough inspection, sealing and minor repairs, debris and gutter clearing, and a clear report so you always know your roof's condition.",
    ],
    benefits: [
      { title: "Extends roof life", desc: "Routine care adds years before replacement is needed." },
      { title: "Prevents big repairs", desc: "Small fixes now avoid major damage later." },
      { title: "Protects warranties", desc: "Many warranties require documented maintenance." },
      { title: "Peace of mind", desc: "Know your roof is ready for every season." },
      { title: "Clear reporting", desc: "Photo updates so you always know its condition." },
    ],
    process: [
      { title: "Inspection", desc: "A full multi-point check of your roof and gutters." },
      { title: "Tune-up", desc: "We reseal, fasten and make minor repairs." },
      { title: "Clear debris", desc: "We clean the roof surface and clear gutters." },
      { title: "Report", desc: "A photo summary of work done and anything to watch." },
    ],
    faqs: [
      {
        q: "How often should I maintain my roof?",
        a: "We recommend at least once a year, plus after major storms, to catch and fix small issues before they grow.",
      },
      {
        q: "What does roof maintenance include?",
        a: "A full inspection, resealing, minor repairs, fastening, and clearing debris from the roof and gutters, followed by a photo report.",
      },
      {
        q: "Can maintenance really extend my roof's life?",
        a: "Yes. Proactive care addresses wear early and can add several years to your roof's usable life.",
      },
      {
        q: "Is maintenance required for my warranty?",
        a: "Many manufacturer warranties require documented maintenance. Our reports help keep your coverage valid.",
      },
      {
        q: "Do you offer maintenance plans?",
        a: "Yes. We offer scheduled maintenance programs so you never have to remember to book a visit.",
      },
      {
        q: "Will you tell me if I need a new roof?",
        a: "We give honest assessments. If maintenance is all you need, that's what we'll recommend — no upselling.",
      },
    ],
    related: ["roof-inspection", "gutter-repair", "roof-repair"],
  },
  {
    slug: "skylight-installation",
    title: "Skylight Installation",
    category: "roofing",
    localLabel: "Skylight Installation",
    short: "Bring in natural light with expertly installed, leak-free skylights.",
    description:
      "Professional skylight installation and replacement that floods your home with daylight while staying perfectly watertight.",
    icon: Sun,
    features: ["Leak-free flashing", "Energy-efficient glass", "Install & replacement"],
    metaTitle: "Skylight Installation | Leak-Free Skylights & Sun Tunnels",
    metaDescription:
      "Expert skylight installation and replacement. Bring natural light into your home with energy-efficient, perfectly watertight skylights. Free estimate.",
    heroTitle: "Fill your home with natural light",
    heroDesc:
      "Beautiful, energy-efficient skylights installed with watertight precision so you get the light without the leaks.",
    overview: [
      "A well-placed skylight transforms a room — flooding it with natural light, opening up the ceiling and even improving ventilation. But skylights are only as good as their installation, which is where roofs most often leak.",
      "We install and replace energy-efficient skylights and sun tunnels with proper curb construction and step flashing, so you enjoy bright, beautiful spaces that stay completely watertight for years.",
    ],
    benefits: [
      {
        title: "More natural light",
        desc: "Brightens dark rooms and reduces daytime lighting needs.",
      },
      {
        title: "Watertight install",
        desc: "Proper flashing and curbing prevent the leaks DIY causes.",
      },
      {
        title: "Energy efficient",
        desc: "Modern low-E glass keeps heat in winter and out in summer.",
      },
      { title: "Better ventilation", desc: "Venting skylights release rising heat and humidity." },
      { title: "Adds value", desc: "Skylights elevate the look and appeal of your home." },
    ],
    process: [
      { title: "Consultation", desc: "We help you choose placement, size and skylight type." },
      { title: "Precise opening", desc: "We frame the opening cleanly and to spec." },
      { title: "Watertight install", desc: "Proper curbing and step flashing seal it for good." },
      { title: "Interior finish", desc: "We finish the shaft and review the work with you." },
    ],
    faqs: [
      {
        q: "Do skylights leak?",
        a: "Properly installed skylights with correct flashing do not leak. Most skylight leaks come from poor installation, which is exactly what our expertise prevents.",
      },
      {
        q: "What type of skylight is best?",
        a: "It depends on the room — fixed skylights maximize light, venting skylights add airflow, and sun tunnels bring light to small or interior spaces. We'll recommend the right fit.",
      },
      {
        q: "Are skylights energy efficient?",
        a: "Modern skylights use low-E, insulated glass that minimizes heat transfer, keeping your home comfortable year-round.",
      },
      {
        q: "Can you replace an old, leaking skylight?",
        a: "Yes. We replace failed skylights and correct the flashing so the new unit stays watertight.",
      },
      {
        q: "Will a skylight work with my roof type?",
        a: "Skylights can be installed on most roof types and pitches. We assess your roof and recommend the best approach.",
      },
      {
        q: "How long does installation take?",
        a: "Most skylight installations are completed in a day, including interior finishing and cleanup.",
      },
    ],
    related: ["roof-repair", "roof-ventilation", "roofing"],
  },
  {
    slug: "quality-materials",
    title: "Quality Materials",
    category: "roofing",
    localLabel: "Premium Roofing Materials",
    short: "We install only premium, warrantied materials engineered to last.",
    description:
      "From top-rated architectural shingles to premium underlayment and metal systems, we use only quality materials backed by strong manufacturer warranties.",
    icon: Gem,
    features: ["Top-rated brands", "Strong warranties", "Engineered to last"],
    metaTitle: "Quality Roofing Materials | Premium, Warrantied Products",
    metaDescription:
      "We install only premium, warrantied roofing materials — top-rated shingles, underlayment and metal systems engineered to protect your home for decades.",
    heroTitle: "Premium materials make the difference",
    heroDesc:
      "We never cut corners on what protects your home — only top-rated, warrantied materials engineered to last.",
    overview: [
      "A roof is only as good as the materials it's built from. We partner with leading manufacturers to install premium architectural shingles, high-performance underlayment, durable flashing and metal systems — never builder-grade shortcuts.",
      "Quality materials don't just last longer; they unlock stronger manufacturer warranties and perform better against sun, wind, hail and snow. Combined with our certified installation, they give you a roof built to protect for decades.",
    ],
    benefits: [
      {
        title: "Top-rated brands",
        desc: "We install trusted, industry-leading manufacturer products.",
      },
      {
        title: "Stronger warranties",
        desc: "Premium materials unlock the best manufacturer coverage.",
      },
      { title: "Built to last", desc: "Engineered to resist sun, wind, hail and heavy snow." },
      {
        title: "Better performance",
        desc: "Quality underlayment and flashing prevent leaks at the source.",
      },
      {
        title: "Lasting value",
        desc: "Durable materials mean fewer repairs and a longer roof life.",
      },
    ],
    process: [
      { title: "Material consult", desc: "We explain the options and recommend the best fit." },
      {
        title: "Transparent specs",
        desc: "Every material and warranty is spelled out in writing.",
      },
      { title: "Certified install", desc: "Manufacturer-certified crews protect your warranty." },
      {
        title: "Warranty registration",
        desc: "We register your coverage so you're fully protected.",
      },
    ],
    faqs: [
      {
        q: "Why do roofing materials matter so much?",
        a: "Premium materials last longer, perform better against the elements, and unlock stronger manufacturer warranties than builder-grade products.",
      },
      {
        q: "What brands do you install?",
        a: "We partner with leading, industry-trusted manufacturers and recommend the best products for your home, budget and climate.",
      },
      {
        q: "Are better materials worth the extra cost?",
        a: "Yes. Quality materials reduce repairs, last significantly longer and protect your home more reliably, making them a strong long-term value.",
      },
      {
        q: "Do premium materials come with warranties?",
        a: "Yes. Premium products carry robust manufacturer warranties, and our certified installation keeps that coverage valid.",
      },
      {
        q: "What is underlayment and why does it matter?",
        a: "Underlayment is the water-resistant layer beneath your shingles. High-quality underlayment is a critical second line of defense against leaks.",
      },
      {
        q: "Will you tell me which material is right for me?",
        a: "Absolutely. We assess your home and goals and give honest, no-pressure recommendations on the best materials for you.",
      },
    ],
    related: ["roofing", "metal-roofing", "roof-replacement"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export interface City {
  slug: string;
  name: string;
  state: string;
  intro: string;
  localNote: string;
  landmarks: string[];
}

export const cities: City[] = [
  {
    slug: "memphis",
    name: "Memphis",
    state: "TN",
    intro:
      "As Memphis's trusted roofing and exterior contractor, we protect homes across the Bluff City from intense summer heat and humidity, severe thunderstorms, high winds and damaging hail.",
    localNote:
      "From historic homes in Midtown and Central Gardens to newer builds in East Memphis, Memphis roofs take a beating from humid heat, wind-driven rain and sudden storms. We tailor every roof, siding and gutter system to how Memphis weather actually behaves.",
    landmarks: ["Midtown", "East Memphis", "Downtown Memphis", "Central Gardens"],
  },
  {
    slug: "germantown",
    name: "Germantown",
    state: "TN",
    intro:
      "Germantown homeowners trust Precision Roofing & Exteriors for premium roofing, siding and gutters that match the area's high standards for curb appeal and quality.",
    localNote:
      "Germantown's established neighborhoods and upscale homes demand flawless craftsmanship and premium materials. We specialize in high-end roofing and exterior work that holds up to West Tennessee storms and the neighborhood's standards.",
    landmarks: ["Old Germantown", "Forest Hill", "Farmington", "Germantown Pkwy"],
  },
  {
    slug: "collierville",
    name: "Collierville",
    state: "TN",
    intro:
      "In Collierville, where curb appeal matters, we deliver premium roofing, siding and exterior solutions that protect and elevate distinctive homes.",
    localNote:
      "Collierville's larger homes and custom builds need premium materials and proper ventilation to handle humid summers and severe storms. We deliver high-end roofing and exterior work built to last.",
    landmarks: ["Town Square", "Schilling Farms", "Bailey Station", "Poplar Ave"],
  },
  {
    slug: "bartlett",
    name: "Bartlett",
    state: "TN",
    intro:
      "Bartlett families trust Precision Roofing & Exteriors for dependable roofing, gutters and siding backed by a written warranty.",
    localNote:
      "Bartlett's mix of established and newer homes benefits from our tailored approach — matching materials and methods to each home's age and exposure for long-lasting protection against wind and hail.",
    landmarks: ["Stage Rd", "Bartlett Station", "Elmore Park", "Old Brownsville Rd"],
  },
  {
    slug: "cordova",
    name: "Cordova",
    state: "TN",
    intro:
      "Cordova homeowners count on us for honest, high-quality roofing and exterior work that protects their homes and their budgets.",
    localNote:
      "From established subdivisions to growing neighborhoods, Cordova homes need roofing and gutter systems that handle wind-driven rain, hail and seasonal storms. We deliver lasting protection with transparent pricing.",
    landmarks: ["Germantown Pkwy", "Macon Rd", "Countrywood", "Dexter Rd"],
  },
  {
    slug: "arlington",
    name: "Arlington",
    state: "TN",
    intro:
      "Arlington homeowners rely on us for storm-ready roofing and exterior systems built to handle West Tennessee's severe weather.",
    localNote:
      "Arlington's growing developments deserve better-than-builder-grade materials. We install wind-rated roofing and securely fastened gutter systems engineered for storm-prone conditions.",
    landmarks: ["Depot Square", "Donelson Farms", "Airline Rd", "Milton Wilson Rd"],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    state: "TN",
    intro:
      "As Lakeland continues to grow, homeowners choose Precision for premium roofing and exterior work that protects their investment.",
    localNote:
      "Lakeland's newer developments deserve premium roofing systems and proper installation that add lasting value and stand up to high winds, hail and humid heat.",
    landmarks: ["Canada Rd", "Garner Lake", "Oakwood", "Davies Plantation"],
  },
  {
    slug: "millington",
    name: "Millington",
    state: "TN",
    intro:
      "Millington property owners trust us for practical, durable roofing, siding and gutter solutions for homes and commercial buildings.",
    localNote:
      "With a mix of residential and commercial properties, Millington benefits from our full-service expertise across both residential roofing and flat commercial systems built for storm-prone conditions.",
    landmarks: ["Navy Rd", "Downtown Millington", "Big Creek", "Singleton Pkwy"],
  },
  {
    slug: "southaven",
    name: "Southaven",
    state: "MS",
    intro:
      "Southaven homeowners choose Precision Roofing & Exteriors for honest, high-quality work that stands up to the Mid-South's storms.",
    localNote:
      "Southaven's fast-growing residential neighborhoods need rugged, storm-ready exterior systems. We deliver durable roofing and gutters engineered for high winds, hail and heavy rain just across the state line.",
    landmarks: ["Snowden Grove", "Silo Square", "Stateline Rd", "Goodman Rd"],
  },
  {
    slug: "olive-branch",
    name: "Olive Branch",
    state: "MS",
    intro:
      "Olive Branch families trust us for tough, weather-ready roofing and exterior solutions built for Mid-South storms.",
    localNote:
      "Olive Branch's intense summer heat, humidity and severe storms are hard on roofs. We install heat- and wind-resistant systems engineered to perform through every season in the DeSoto County area.",
    landmarks: [
      "Olive Branch Square",
      "Goodman Rd",
      "Cherokee Valley",
      "Wedgewood",
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

/** Backward-compatible string list used in footer & home. */
export const serviceAreas = cities.map((c) => c.name);
