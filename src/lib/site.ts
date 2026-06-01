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
  cityState: "Boise, ID 83702",
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
      { title: "Certified installation", desc: "Manufacturer-certified crews protect your material and labor warranty." },
      { title: "Premium materials", desc: "Architectural, metal and membrane systems rated for 30–50+ years." },
      { title: "Energy efficiency", desc: "Proper ventilation and reflective options lower attic heat and bills." },
      { title: "Written warranty", desc: "Workmanship warranty plus full manufacturer material coverage." },
    ],
    process: [
      { title: "Free inspection", desc: "We assess your roof, decking and ventilation and explain every option." },
      { title: "Clear proposal", desc: "Transparent, written pricing with material and color choices." },
      { title: "Expert installation", desc: "Protective prep, precise install, and constant quality checks." },
      { title: "Final walkthrough", desc: "Magnetic nail sweep, cleanup and a complete quality review with you." },
    ],
    faqs: [
      { q: "How long does a new roof last?", a: "Architectural shingles typically last 25–30 years, while metal and premium systems can protect your home for 50 years or more with proper installation and ventilation." },
      { q: "Do you offer financing for a new roof?", a: "Yes. We offer flexible monthly payment plans with competitive rates and fast approval — often with no money down." },
      { q: "Can you install a roof in winter?", a: "Yes. We install year-round and follow manufacturer cold-weather guidelines to ensure proper sealing and performance." },
      { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed and insured for your complete protection on every project." },
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
      { title: "Root-cause diagnosis", desc: "We find where water really enters, not just where it shows up." },
      { title: "Same-week service", desc: "Fast scheduling to protect your home before damage spreads." },
      { title: "Honest advice", desc: "We tell you straight whether a repair or replacement is smarter." },
      { title: "Guaranteed work", desc: "Every repair is backed by our written workmanship warranty." },
    ],
    process: [
      { title: "Leak inspection", desc: "Thorough diagnosis of the roof, attic and entry points." },
      { title: "Clear estimate", desc: "Straightforward pricing with no surprises or upsells." },
      { title: "Precision repair", desc: "Quality materials matched to your existing roof system." },
      { title: "Leak test & cleanup", desc: "We verify the fix and leave your property spotless." },
    ],
    faqs: [
      { q: "How quickly can you repair my roof?", a: "We offer fast, often same-week scheduling, and emergency tarping is available to protect your home immediately after storm damage." },
      { q: "Should I repair or replace my roof?", a: "It depends on age, extent of damage and decking condition. Our free inspection gives you an honest recommendation with no pressure." },
      { q: "Will a repair match my existing shingles?", a: "We carefully match materials and color as closely as possible so repairs blend with your current roof." },
      { q: "Do you help with insurance claims?", a: "Yes. We document storm-related damage and can support your insurance claim from start to finish." },
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
      { title: "Full system rebuild", desc: "New underlayment, ventilation and flashing — not just shingles." },
      { title: "Boosts home value", desc: "A new roof improves curb appeal, resale value and insurability." },
      { title: "One-day installs", desc: "Most homes are completed in a single day with minimal disruption." },
      { title: "50-year options", desc: "Premium materials engineered for half a century of protection." },
    ],
    process: [
      { title: "Inspection & quote", desc: "We assess your roof and present clear material and color options." },
      { title: "Property protection", desc: "Landscaping and exteriors are protected before any tear-off." },
      { title: "Tear-off & install", desc: "Complete removal, decking repair, and precise new installation." },
      { title: "Cleanup & review", desc: "Magnetic nail sweep, full cleanup, and a final walkthrough." },
    ],
    faqs: [
      { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in a single day. Larger or complex roofs may take a bit longer — we provide a clear timeline up front." },
      { q: "Will you replace damaged decking?", a: "Yes. Once the old roof is removed we inspect the decking and replace any damaged or rotted sections before installing your new roof." },
      { q: "What financing is available?", a: "We offer flexible monthly payment plans with competitive rates and fast approval, often with no money down." },
      { q: "How disruptive is the project?", a: "We protect your property, work efficiently, and clean thoroughly so most homeowners barely notice the disruption." },
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
      { title: "Rapid response", desc: "Fast dispatch to secure your home and limit water damage." },
      { title: "Emergency tarping", desc: "Professional temporary protection that holds until permanent repair." },
      { title: "Claim documentation", desc: "Detailed photos and reports to strengthen your insurance claim." },
      { title: "Permanent plan", desc: "A clear path to lasting repair or replacement after the emergency." },
    ],
    process: [
      { title: "Call & dispatch", desc: "Reach us and we mobilize a crew to protect your home." },
      { title: "Secure the roof", desc: "Emergency tarping and temporary measures stop the leak." },
      { title: "Document damage", desc: "Thorough records to support your insurance claim." },
      { title: "Permanent repair", desc: "We schedule lasting repair or replacement once secured." },
    ],
    faqs: [
      { q: "How fast can you get to my home?", a: "We prioritize emergencies and dispatch crews as quickly as possible to tarp and protect your roof before damage spreads." },
      { q: "Will emergency tarping stop the leak?", a: "Professional tarping provides reliable temporary protection that keeps water out until a permanent repair can be completed." },
      { q: "Do you handle the insurance side?", a: "Yes. We document all damage and can work with your adjuster to support a fair, full claim." },
      { q: "What should I do while I wait?", a: "Move valuables away from the leak, place buckets to catch water, and avoid the affected area until our crew arrives." },
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
      { title: "Free assessment", desc: "A thorough, no-cost inspection to find all storm damage." },
      { title: "Insurance advocacy", desc: "We document and advocate for a fair, complete claim." },
      { title: "Full restoration", desc: "Roof, siding, gutters and exterior — restored by one team." },
      { title: "Local experts", desc: "We know local storm patterns and what adjusters look for." },
    ],
    process: [
      { title: "Free inspection", desc: "Detailed documentation of all hail and wind damage." },
      { title: "Claim support", desc: "We help file and meet with your adjuster when possible." },
      { title: "Approved scope", desc: "We confirm the approved repairs and material selections." },
      { title: "Complete restoration", desc: "Expert repair or replacement and a final walkthrough." },
    ],
    faqs: [
      { q: "How do I know if I have storm damage?", a: "Much hail and wind damage is invisible from the ground. Our free inspection identifies bruising, cracks and lifted shingles before they cause leaks." },
      { q: "Will you work with my insurance company?", a: "Yes. We document the damage, meet with your adjuster when possible, and advocate to ensure your claim is handled fairly and fully." },
      { q: "How long do I have to file a claim?", a: "Most policies have a filing window after a storm, so it's best to get inspected promptly. We can help you act before deadlines pass." },
      { q: "What if my claim is denied?", a: "We can provide detailed documentation and a professional assessment to support a re-inspection or appeal of an unfair denial." },
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
      { title: "Major curb appeal", desc: "Refresh your home's entire look with modern colors and textures." },
      { title: "Better efficiency", desc: "Insulated options reduce drafts and lower energy bills." },
      { title: "Low maintenance", desc: "Durable materials that resist rot, pests and fading." },
      { title: "Higher resale", desc: "New siding is one of the top return-on-investment upgrades." },
    ],
    process: [
      { title: "Design consult", desc: "We help you choose materials, styles and colors that fit your home." },
      { title: "Detailed quote", desc: "Clear, written pricing with all materials specified." },
      { title: "Precision install", desc: "Proper moisture barriers, insulation and flashing details." },
      { title: "Final walkthrough", desc: "Full cleanup and a complete quality review with you." },
    ],
    faqs: [
      { q: "Which siding material is best?", a: "Fiber cement offers premium durability and a wood-like look, while vinyl is cost-effective and low-maintenance. We'll help you choose based on budget and goals." },
      { q: "Will new siding lower my energy bills?", a: "Insulated siding options reduce drafts and improve your home's thermal envelope, which can meaningfully lower heating and cooling costs." },
      { q: "How long does siding installation take?", a: "Most homes are completed within several days depending on size and material. We'll provide a clear timeline before we begin." },
      { q: "Can you match my existing siding?", a: "Yes, we offer a wide range of colors and profiles and will match new work to your home as closely as possible." },
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
      { title: "Stops moisture", desc: "Restores the weather barrier protecting your walls and framing." },
      { title: "Color matched", desc: "Repairs blend seamlessly with your existing siding." },
      { title: "Fast service", desc: "Quick scheduling to prevent further water damage." },
      { title: "Storm ready", desc: "We repair wind, hail and impact damage and document it for claims." },
    ],
    process: [
      { title: "Assessment", desc: "We inspect the damage and the moisture barrier behind it." },
      { title: "Clear estimate", desc: "Honest pricing and a recommendation on repair vs. replacement." },
      { title: "Matched repair", desc: "We replace damaged panels and match color and texture." },
      { title: "Cleanup & review", desc: "A tidy finish and a final walkthrough with you." },
    ],
    faqs: [
      { q: "Can damaged siding be repaired or must it be replaced?", a: "Many issues can be repaired by replacing affected panels. If damage is widespread, we'll honestly advise whether replacement is more cost-effective." },
      { q: "Will the repair be noticeable?", a: "We match material, profile and color as closely as possible so repairs blend with your existing siding." },
      { q: "Do you repair storm-damaged siding?", a: "Yes. We repair wind, hail and impact damage and document it to support insurance claims when applicable." },
      { q: "How soon should I repair siding?", a: "Promptly — gaps and cracks let moisture reach your framing, so quick repair prevents far costlier rot and mold damage." },
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
      { title: "Foundation protection", desc: "Channels water away to prevent costly foundation damage." },
      { title: "Seamless fit", desc: "On-site fabrication means fewer joints and fewer leaks." },
      { title: "Less maintenance", desc: "Leaf-guard systems keep gutters flowing with less cleaning." },
      { title: "Custom design", desc: "Sized and placed for your exact roofline and rainfall." },
    ],
    process: [
      { title: "Roofline review", desc: "We measure your roof and plan optimal water flow." },
      { title: "Custom quote", desc: "Clear pricing for gutters, downspouts and guards." },
      { title: "Seamless install", desc: "On-site fabrication and precise, secure installation." },
      { title: "Flow test", desc: "We verify proper drainage and clean up completely." },
    ],
    faqs: [
      { q: "Why choose seamless gutters?", a: "Seamless gutters are fabricated on site to fit your home with far fewer joints, which means fewer leaks and a cleaner appearance." },
      { q: "Are leaf guards worth it?", a: "Yes. Quality leaf-guard systems dramatically reduce clogs and cleaning while keeping water flowing freely, especially under heavy tree cover." },
      { q: "How often should gutters be replaced?", a: "Well-installed aluminum gutters can last 20 years or more. We'll assess whether cleaning, repair or replacement is the right step." },
      { q: "Do clogged gutters really cause damage?", a: "Absolutely. Overflowing gutters lead to fascia rot, siding stains, basement leaks and foundation problems — all far costlier than gutter care." },
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
      { title: "Proper drainage", desc: "Downspouts placed to carry water safely away from the home." },
      { title: "Guard-ready", desc: "Built to accept leaf-guard systems for easy maintenance." },
    ],
    process: [
      { title: "Measure & plan", desc: "We assess your roofline and plan optimal water flow." },
      { title: "Fabricate on site", desc: "Seamless gutters are cut to fit your home exactly." },
      { title: "Secure install", desc: "Proper pitch, hangers and downspout placement." },
      { title: "Flow test", desc: "We confirm drainage and leave your property clean." },
    ],
    faqs: [
      { q: "How long does gutter installation take?", a: "Most homes are completed in a single day. We fabricate seamless gutters on site for a precise fit." },
      { q: "What size gutters do I need?", a: "It depends on your roof area and local rainfall. We size your system to handle heavy downpours without overflow." },
      { q: "Can you add leaf guards during installation?", a: "Yes. We can install leaf-guard systems with your new gutters to reduce future clogs and cleaning." },
      { q: "What gutter material do you use?", a: "We primarily install durable seamless aluminum, which resists rust and offers an excellent balance of longevity and value." },
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
      { title: "Stops overflow", desc: "Repairs restore proper flow to protect siding and foundation." },
      { title: "Seam sealing", desc: "We seal leaks and reconnect joints for a watertight system." },
      { title: "Re-secure & re-pitch", desc: "Correcting sag and pitch keeps water moving to downspouts." },
      { title: "Fast turnaround", desc: "Quick scheduling before the next heavy rain." },
    ],
    process: [
      { title: "Inspection", desc: "We identify leaks, sag, clogs and loose components." },
      { title: "Estimate", desc: "Honest pricing and a repair-vs-replace recommendation." },
      { title: "Repair", desc: "Seal, re-secure, re-pitch and clear blockages." },
      { title: "Flow test", desc: "We confirm proper drainage and clean up." },
    ],
    faqs: [
      { q: "Can my gutters be repaired or do I need new ones?", a: "Many problems — leaks, sag, loose downspouts — are easily repaired. If gutters are widely corroded, we'll honestly recommend replacement." },
      { q: "Why are my gutters overflowing?", a: "Usually clogs, improper pitch, or undersized gutters. We diagnose the cause and restore proper flow." },
      { q: "Do you clear clogs too?", a: "Yes. We clear blockages in gutters and downspouts as part of restoring proper drainage." },
      { q: "How fast can you come out?", a: "We offer quick scheduling, especially ahead of forecast storms, to protect your home from water damage." },
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
      { title: "Lower energy bills", desc: "Efficient glass and tight seals reduce heating and cooling costs." },
      { title: "More comfort", desc: "Fewer drafts and hot spots throughout your home." },
      { title: "Quieter rooms", desc: "Insulated glass cuts outside noise significantly." },
      { title: "Fresh look", desc: "New windows instantly modernize your home inside and out." },
    ],
    process: [
      { title: "Measure & select", desc: "Precise measurements and help choosing styles and glass." },
      { title: "Clear quote", desc: "Transparent pricing with all options specified." },
      { title: "Professional install", desc: "Square, level, sealed and fully insulated fits." },
      { title: "Final review", desc: "We test operation, clean up and walk through with you." },
    ],
    faqs: [
      { q: "Will new windows really lower my bills?", a: "Yes. Energy-efficient glass and a properly sealed installation reduce drafts and heat transfer, which can meaningfully cut energy costs." },
      { q: "Double-pane or triple-pane?", a: "Double-pane suits most homes, while triple-pane adds extra efficiency and sound reduction in harsh climates or noisy locations." },
      { q: "How long does installation take?", a: "Many window projects are completed in a day or two depending on the number of windows. We'll provide a clear timeline up front." },
      { q: "Do you install custom sizes?", a: "Yes. We measure precisely and order windows custom-sized to your existing openings for a perfect fit." },
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
      { title: "Clear views again", desc: "Replace foggy, seal-failed glass with crisp, clear panes." },
      { title: "Energy savings", desc: "Efficient units lower heating and cooling costs year-round." },
      { title: "Warranty options", desc: "Lifetime warranty options available on quality units." },
    ],
    process: [
      { title: "Assessment", desc: "We evaluate your existing windows and openings." },
      { title: "Selection & quote", desc: "Choose styles and glass with clear, written pricing." },
      { title: "Removal & install", desc: "Old units out, frames corrected, new windows sealed in." },
      { title: "Final walkthrough", desc: "We test operation, clean up and review the work with you." },
    ],
    faqs: [
      { q: "When should I replace rather than repair windows?", a: "If windows are drafty, fogging between panes, hard to operate, or single-pane, replacement usually delivers far better comfort and energy savings than repair." },
      { q: "Why are my windows foggy inside the glass?", a: "Fogging between panes means the seal has failed and the insulating gas has escaped. The unit should be replaced to restore efficiency and clarity." },
      { q: "Will replacement windows match my home?", a: "Yes. We offer a wide range of styles, colors and grille options to complement your home's architecture." },
      { q: "Is there a warranty?", a: "Yes. We offer lifetime warranty options on quality window units plus our workmanship guarantee on the installation." },
    ],
    related: ["window-installation", "siding-repair", "roof-replacement"],
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
    slug: "boise",
    name: "Boise",
    state: "ID",
    intro:
      "As Boise's trusted roofing and exterior contractor, we protect homes across the City of Trees from intense summer sun, winter snow loads and sudden Treasure Valley storms.",
    localNote:
      "From the North End's historic bungalows to new builds in the Foothills, Boise homes face everything from UV-baked south-facing roofs to ice-dam-prone shaded slopes. We tailor every roof, siding and gutter system to how Boise weather actually behaves.",
    landmarks: ["North End", "The Bench", "Boise Foothills", "Downtown Boise"],
  },
  {
    slug: "meridian",
    name: "Meridian",
    state: "ID",
    intro:
      "Meridian's fast-growing neighborhoods trust Precision Roofing & Exteriors for durable roofing, siding and gutters built for Idaho's seasons.",
    localNote:
      "With so much newer construction across Meridian, we focus on premium materials and proper ventilation that outlast builder-grade installs and stand up to wind, hail and heavy snow.",
    landmarks: ["The Village at Meridian", "Kuna-Meridian Rd", "Ten Mile", "Eagle Rd corridor"],
  },
  {
    slug: "nampa",
    name: "Nampa",
    state: "ID",
    intro:
      "Nampa homeowners count on us for honest, high-quality roofing and exterior work that protects their homes and their budgets.",
    localNote:
      "From established neighborhoods to growing subdivisions, Nampa homes need roofing and gutter systems that handle wind-driven rain and seasonal storms. We deliver lasting protection with transparent pricing.",
    landmarks: ["Downtown Nampa", "Lake Lowell", "Karcher", "Midland"],
  },
  {
    slug: "eagle",
    name: "Eagle",
    state: "ID",
    intro:
      "In Eagle, where curb appeal matters, we deliver premium roofing, siding and exterior solutions that protect and elevate distinctive homes.",
    localNote:
      "Eagle's larger homes and custom builds demand premium materials and flawless craftsmanship. We specialize in high-end roofing and exterior work that holds up to the elements and the neighborhood's standards.",
    landmarks: ["Eagle Island", "Downtown Eagle", "Eagle Foothills", "BanBury"],
  },
  {
    slug: "caldwell",
    name: "Caldwell",
    state: "ID",
    intro:
      "Caldwell families trust Precision Roofing & Exteriors for dependable roofing, gutters and siding backed by a written warranty.",
    localNote:
      "Caldwell's mix of historic and newer homes benefits from our tailored approach — matching materials and methods to each home's age and exposure for long-lasting protection.",
    landmarks: ["Downtown Caldwell", "Indian Creek", "Sunnyslope", "College of Idaho"],
  },
  {
    slug: "kuna",
    name: "Kuna",
    state: "ID",
    intro:
      "Kuna homeowners rely on us for storm-ready roofing and exterior systems built to handle wide-open, wind-exposed conditions.",
    localNote:
      "Kuna's open landscape means homes catch more wind and weather. We install wind-rated roofing and securely fastened gutter systems engineered for exposed sites.",
    landmarks: ["Downtown Kuna", "Kuna Caves", "Swan Falls Rd", "Indian Creek"],
  },
  {
    slug: "star",
    name: "Star",
    state: "ID",
    intro:
      "As Star continues to grow, homeowners choose Precision for premium roofing and exterior work that protects their investment.",
    localNote:
      "Star's newer developments deserve better-than-builder-grade materials. We focus on premium roofing systems and proper installation that add lasting value and protection.",
    landmarks: ["Downtown Star", "State St corridor", "Floating Feather", "Can-Ada Rd"],
  },
  {
    slug: "garden-city",
    name: "Garden City",
    state: "ID",
    intro:
      "Garden City property owners trust us for practical, durable roofing, siding and gutter solutions for homes and commercial buildings.",
    localNote:
      "With a mix of residential and commercial properties along the river, Garden City benefits from our full-service expertise across both residential roofing and flat commercial systems.",
    landmarks: ["Boise River Greenbelt", "Chinden Blvd", "Expo Idaho", "Riverside"],
  },
  {
    slug: "middleton",
    name: "Middleton",
    state: "ID",
    intro:
      "Middleton homeowners choose Precision Roofing & Exteriors for honest, high-quality work that stands up to Idaho's seasons.",
    localNote:
      "Middleton's rural and residential properties need rugged, low-maintenance exterior systems. We deliver durable roofing and gutters designed for long-term, hands-off protection.",
    landmarks: ["Downtown Middleton", "Foothill Rd", "Willow Creek", "Cemetery Rd"],
  },
  {
    slug: "mountain-home",
    name: "Mountain Home",
    state: "ID",
    intro:
      "Mountain Home families trust us for tough, weather-ready roofing and exterior solutions built for high-desert extremes.",
    localNote:
      "Mountain Home's intense sun, wind and temperature swings are hard on roofs. We install heat- and wind-resistant systems engineered to perform in high-desert conditions.",
    landmarks: ["Downtown Mountain Home", "Air Force Base", "American Legion Blvd", "Optimist Park"],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

/** Backward-compatible string list used in footer & home. */
export const serviceAreas = cities.map((c) => c.name);
