import heroImg from "@/assets/hero-home.jpg";
import ctaImg from "@/assets/cta-home.jpg";
import afterImg from "@/assets/after-roof.jpg";
import beforeImg from "@/assets/before-roof.jpg";
import crewImg from "@/assets/about-crew.jpg";

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const authors: Record<string, BlogAuthor> = {
  team: {
    name: "Precision Roofing Team",
    role: "Roofing & Exterior Specialists",
    bio: "Our team brings 25+ years of combined roofing, siding and exterior experience across the greater Memphis area, sharing practical advice to help homeowners protect their biggest investment.",
    initials: "PR",
  },
  marcus: {
    name: "Marcus Hale",
    role: "Lead Project Estimator",
    bio: "Marcus has inspected thousands of roofs across the Mid-South and specializes in storm-damage assessment and insurance claims, helping homeowners make confident, informed decisions.",
    initials: "MH",
  },
};

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "roofing",
    name: "Roofing",
    description: "Roof maintenance, materials, repair and replacement guidance.",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    description: "Storm preparation, damage assessment and insurance claim help.",
  },
  {
    slug: "exteriors",
    name: "Exteriors",
    description: "Siding, gutters, windows and full exterior upgrades.",
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    description: "Seasonal home and roof maintenance tips that prevent costly damage.",
  },
];

export interface BlogSection {
  id: string;
  heading: string;
  body: string[];
  subsections?: { heading: string; body: string[] }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-you-need-a-new-roof",
    title: "7 Warning Signs You Need a New Roof",
    excerpt:
      "From curling shingles to daylight in the attic, here are the clearest signs it's time to stop repairing and start planning a roof replacement.",
    category: "roofing",
    author: "marcus",
    date: "2026-05-12",
    readTime: "6 min read",
    image: afterImg,
    imageAlt: "Newly replaced architectural shingle roof on a modern home",
    intro:
      "Your roof rarely fails all at once — it sends warning signs for years. Knowing how to read them helps you replace your roof on your terms instead of after an expensive interior leak. Here are the seven signs our estimators see most often.",
    sections: [
      {
        id: "age",
        heading: "1. Your roof is approaching 20+ years",
        body: [
          "Most asphalt shingle roofs are engineered to last 20–30 years. If yours is in that range and showing wear, it's smart to plan ahead rather than wait for a failure.",
          "Age alone doesn't mean immediate replacement, but combined with any of the signs below, it's a strong indicator your roof is near the end of its service life.",
        ],
      },
      {
        id: "shingles",
        heading: "2. Curling, cracked or missing shingles",
        body: [
          "Shingles that curl at the edges, crack, or go missing can no longer shed water reliably. Once you see widespread shingle damage, repairs become a losing battle.",
        ],
        subsections: [
          {
            heading: "Granules in the gutters",
            body: [
              "Finding shingle granules collecting in your gutters is a classic late-stage warning sign — it means your shingles are breaking down and losing their protective surface.",
            ],
          },
        ],
      },
      {
        id: "leaks",
        heading: "3. Interior leaks and water stains",
        body: [
          "Brown stains on ceilings, peeling paint, or damp spots in the attic mean water is already getting in. The longer this continues, the more it threatens insulation, drywall and framing.",
        ],
      },
      {
        id: "daylight",
        heading: "4. Daylight or sagging in the attic",
        body: [
          "If you can see daylight through the roof boards or notice sagging, your decking may be compromised by moisture. This is a serious structural sign that warrants immediate professional inspection.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do most roofs last?",
        a: "Architectural asphalt shingles typically last 25–30 years, while metal and premium systems can last 50 years or more with proper installation and ventilation.",
      },
      {
        q: "Can I just keep repairing my old roof?",
        a: "Repairs make sense for isolated issues, but once damage is widespread or the roof is near the end of its life, repeated repairs cost more than a replacement that restores decades of protection.",
      },
      {
        q: "Will insurance pay for a new roof?",
        a: "If your roof was damaged by a covered event like a storm, insurance may cover replacement. Our team documents the damage and helps you navigate the claim.",
      },
    ],
    relatedServices: ["roof-replacement", "roof-repair", "roofing"],
  },
  {
    slug: "roof-storm-damage-checklist",
    title: "After the Storm: A Homeowner's Roof Damage Checklist",
    excerpt:
      "What to inspect, document and do in the first 48 hours after a hail or windstorm to protect your home and your insurance claim.",
    category: "storm-damage",
    author: "marcus",
    date: "2026-04-28",
    readTime: "7 min read",
    image: beforeImg,
    imageAlt: "Storm-damaged roof with missing and lifted shingles",
    intro:
      "The hours after a major storm are critical — both for protecting your home from further damage and for building a strong insurance claim. Use this checklist to act quickly and safely.",
    sections: [
      {
        id: "safety",
        heading: "1. Prioritize safety first",
        body: [
          "Never climb onto a wet or damaged roof. Inspect from the ground and from inside your attic with a flashlight, looking for daylight, leaks and water stains.",
        ],
      },
      {
        id: "document",
        heading: "2. Document everything",
        body: [
          "Take dated photos and video of all visible damage — to the roof, siding, gutters, windows and any interior water intrusion. Thorough documentation is the foundation of a successful claim.",
        ],
      },
      {
        id: "temporary",
        heading: "3. Prevent further damage",
        body: [
          "If water is entering your home, place buckets and move valuables, then call for professional emergency tarping. Most policies require you to take reasonable steps to prevent additional damage.",
        ],
      },
      {
        id: "inspection",
        heading: "4. Get a professional inspection",
        body: [
          "Much hail and wind damage is invisible from the ground. A professional storm inspection identifies bruising, cracks and lifted shingles, and provides the documentation adjusters need.",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon should I file a storm claim?",
        a: "As soon as possible. Most policies have a filing window, and acting quickly with strong documentation improves your odds of a fair, full payout.",
      },
      {
        q: "Should I get an inspection before filing?",
        a: "A professional inspection before or alongside filing helps you understand the true extent of damage and ensures nothing is missed in your claim.",
      },
      {
        q: "Do you work directly with insurance adjusters?",
        a: "Yes. We document damage in detail and meet with adjusters when possible to advocate for a fair assessment.",
      },
    ],
    relatedServices: ["storm-damage-repair", "emergency-roofing", "roof-repair"],
  },
  {
    slug: "metal-vs-asphalt-roofing",
    title: "Metal vs. Asphalt Roofing: Which Is Right for Your Home?",
    excerpt:
      "A clear, no-hype comparison of cost, lifespan, energy efficiency and curb appeal to help you choose the best roofing material.",
    category: "roofing",
    author: "team",
    date: "2026-04-10",
    readTime: "8 min read",
    image: heroImg,
    imageAlt: "Modern home featuring a premium roof under clear skies",
    intro:
      "Choosing between metal and asphalt shingle roofing comes down to your budget, how long you plan to stay, and the look you want. Here's an honest breakdown of how the two compare.",
    sections: [
      {
        id: "cost",
        heading: "Upfront cost vs. long-term value",
        body: [
          "Asphalt shingles have a lower upfront cost and remain the most popular choice for good reason. Metal roofing costs more initially but can last twice as long, often making it the better long-term value.",
        ],
      },
      {
        id: "lifespan",
        heading: "Lifespan and durability",
        body: [
          "Quality architectural shingles last 25–30 years, while metal roofing can protect your home for 50+ years and stands up exceptionally well to wind and snow.",
        ],
      },
      {
        id: "efficiency",
        heading: "Energy efficiency",
        body: [
          "Metal roofs reflect solar heat and can lower cooling costs, especially in sunny climates. Modern shingles also offer reflective options that improve efficiency over older roofs.",
        ],
      },
      {
        id: "appeal",
        heading: "Curb appeal and style",
        body: [
          "Both materials come in many colors and profiles. Asphalt offers a classic, versatile look, while metal delivers a clean, modern aesthetic that's increasingly popular.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is metal roofing worth the extra cost?",
        a: "If you plan to stay in your home long-term, metal's longevity and durability often make it the better value despite the higher upfront cost.",
      },
      {
        q: "Is metal roofing noisy in the rain?",
        a: "With proper decking and underlayment, a modern metal roof is no louder inside than a shingle roof.",
      },
      {
        q: "Which adds more resale value?",
        a: "Both add value. Metal can appeal to buyers seeking longevity, while a quality new shingle roof is a strong, broadly appealing upgrade.",
      },
    ],
    relatedServices: ["roofing", "roof-replacement", "roof-repair"],
  },
  {
    slug: "gutter-maintenance-guide",
    title: "The Complete Gutter Maintenance Guide for Memphis Homes",
    excerpt:
      "Why clogged gutters cause expensive foundation damage — and a simple seasonal routine to keep water flowing where it belongs.",
    category: "maintenance",
    author: "team",
    date: "2026-03-22",
    readTime: "5 min read",
    image: ctaImg,
    imageAlt: "Home exterior with clean seamless gutters at dusk",
    intro:
      "Gutters are easy to ignore — until water pools around your foundation or rots your fascia. A little seasonal maintenance prevents some of the most expensive home damage there is.",
    sections: [
      {
        id: "why",
        heading: "Why gutter maintenance matters",
        body: [
          "When gutters clog, water overflows and pools against your foundation, leading to cracks, basement leaks and erosion. Clean, properly pitched gutters protect your entire home.",
        ],
      },
      {
        id: "seasonal",
        heading: "A simple seasonal routine",
        body: [
          "Clean gutters at least twice a year — spring and fall — and after major storms. Check for sagging, loose fasteners and proper downspout drainage away from the foundation.",
        ],
      },
      {
        id: "guards",
        heading: "When to consider leaf guards",
        body: [
          "If you have heavy tree cover or clean gutters more than twice a year, quality leaf guards dramatically reduce clogs and maintenance while keeping water flowing freely.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should I clean my gutters?",
        a: "At least twice a year — spring and fall — and after major storms. Homes under heavy tree cover may need more frequent cleaning or leaf guards.",
      },
      {
        q: "Are leaf guards worth it?",
        a: "For most homes with nearby trees, yes. They significantly reduce clogs and cleaning while protecting your foundation from overflow.",
      },
      {
        q: "Can clogged gutters really damage my foundation?",
        a: "Absolutely. Overflowing gutters are a leading cause of foundation cracks, basement leaks and costly water damage.",
      },
    ],
    relatedServices: ["gutters", "gutter-installation", "gutter-repair"],
  },
  {
    slug: "boost-curb-appeal-siding",
    title: "5 Exterior Upgrades That Boost Curb Appeal and Home Value",
    excerpt:
      "From new siding to fresh gutters and windows, these high-ROI exterior projects transform how your home looks and performs.",
    category: "exteriors",
    author: "team",
    date: "2026-03-05",
    readTime: "6 min read",
    image: crewImg,
    imageAlt: "Professional exterior crew working on a home upgrade",
    intro:
      "Exterior upgrades consistently rank among the highest-return home improvements. If you're planning to refresh your home — or eventually sell — these five projects deliver the biggest visual and financial impact.",
    sections: [
      {
        id: "siding",
        heading: "1. New siding",
        body: [
          "Few upgrades transform a home like new siding. Fiber cement and modern vinyl refresh your entire exterior while sealing your home against moisture and energy loss.",
        ],
      },
      {
        id: "roof",
        heading: "2. A fresh roof",
        body: [
          "A new roof dramatically improves curb appeal and reassures buyers that the home is protected and well-maintained — one of the most valued upgrades at resale.",
        ],
      },
      {
        id: "windows",
        heading: "3. Replacement windows",
        body: [
          "New windows modernize your home inside and out while cutting energy bills and outside noise — a rare upgrade that improves both looks and performance.",
        ],
      },
      {
        id: "gutters",
        heading: "4. Seamless gutters",
        body: [
          "Clean, seamless gutters protect your investment and give your home a crisp, finished appearance — a small detail that makes a big difference.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which exterior upgrade has the best ROI?",
        a: "New siding and a new roof consistently rank among the highest-return exterior upgrades, improving both curb appeal and resale value.",
      },
      {
        q: "Should I do these projects together?",
        a: "Bundling exterior projects can save on labor and ensure a cohesive look. We can coordinate roofing, siding, gutters and windows as one project.",
      },
      {
        q: "Do exterior upgrades really help with resale?",
        a: "Yes. Curb appeal strongly influences buyer perception and offers, and protective upgrades like roofing reassure buyers about the home's condition.",
      },
    ],
    relatedServices: ["siding-installation", "window-replacement", "gutters"],
  },
  {
    slug: "winter-roof-preparation",
    title: "How to Prepare Your Roof for Storm Season in the Memphis Area",
    excerpt:
      "Ice dams, snow loads and freeze-thaw cycles are hard on roofs. Here's how to get yours winter-ready before the first big storm.",
    category: "maintenance",
    author: "marcus",
    date: "2026-02-18",
    readTime: "5 min read",
    image: beforeImg,
    imageAlt: "Roof being inspected before winter weather arrives",
    intro:
      "Mid-South storm seasons test every roof with high winds, hail and heavy rain. A little preparation each season prevents leaks, storm damage and emergency repairs when severe weather hits.",
    sections: [
      {
        id: "inspect",
        heading: "1. Get a fall inspection",
        body: [
          "A professional inspection before winter catches loose shingles, failing flashing and weak spots while they're still easy and affordable to fix.",
        ],
      },
      {
        id: "gutters",
        heading: "2. Clean and check gutters",
        body: [
          "Clogged gutters contribute to ice dams. Clear them in late fall so melting snow can drain properly instead of refreezing at the eaves.",
        ],
      },
      {
        id: "ventilation",
        heading: "3. Check attic ventilation and insulation",
        body: [
          "Proper attic ventilation and insulation keep your roof deck cold and even, which is the single best defense against ice dams forming at the edges.",
        ],
      },
      {
        id: "trim",
        heading: "4. Trim overhanging branches",
        body: [
          "Heavy snow and ice can bring branches down on your roof. Trimming overhanging limbs before winter reduces the risk of impact damage.",
        ],
      },
    ],
    faqs: [
      {
        q: "What causes ice dams?",
        a: "Ice dams form when heat escapes into the attic, melts snow on the roof, and the runoff refreezes at the cold eaves. Proper ventilation, insulation and clean gutters help prevent them.",
      },
      {
        q: "Should I remove snow from my roof?",
        a: "For most roofs occasional snow is fine, but heavy accumulation or ice dams should be handled carefully — ideally by professionals to avoid damage and injury.",
      },
      {
        q: "When should I schedule a fall inspection?",
        a: "Early to mid fall is ideal, giving you time to complete any needed repairs before the first major snowfall.",
      },
    ],
    relatedServices: ["roof-repair", "gutters", "roofing"],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

export function postsByCategory(slug: string) {
  return blogPosts.filter((p) => p.category === slug);
}
