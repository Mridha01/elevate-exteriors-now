import { company, siteUrl } from "@/lib/site";

export interface Crumb {
  label: string;
  href: string;
}

/** JSON-LD BreadcrumbList from a list of crumbs (absolute URLs). */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${siteUrl}${c.href}`,
    })),
  };
}

/** JSON-LD FAQPage from Q&A pairs. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** JSON-LD Service offered by the LocalBusiness. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${siteUrl}${opts.path}`,
    areaServed: opts.areaServed ?? "Treasure Valley, Idaho",
    provider: {
      "@type": "RoofingContractor",
      name: company.legal,
      telephone: company.phoneHref.replace("tel:", ""),
      url: siteUrl,
    },
  };
}

/** JSON-LD Article for a blog post. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image.startsWith("http") ? opts.image : `${siteUrl}${opts.image}`,
    datePublished: opts.datePublished,
    author: { "@type": "Person", name: opts.authorName },
    publisher: {
      "@type": "Organization",
      name: company.legal,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}${opts.path}`,
  };
}
