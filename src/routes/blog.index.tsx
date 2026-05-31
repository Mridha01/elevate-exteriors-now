import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { blogPosts, blogCategories, authors } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Roofing & Exterior Tips — Precision Roofing & Exteriors" },
      {
        name: "description",
        content:
          "Expert roofing, siding, gutter and storm-damage advice from Precision Roofing & Exteriors. Practical guides to help you protect and improve your home.",
      },
      { property: "og:title", content: "Roofing & Exterior Blog | Precision Roofing & Exteriors" },
      { property: "og:description", content: "Practical roofing and exterior advice for homeowners." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]),
        ),
      },
    ],
  }),
  component: BlogArchive,
});

function BlogArchive() {
  const [featured, ...rest] = blogPosts;
  const fAuthor = authors[featured.author];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Roofing & exterior insights"
        description="Practical, no-hype advice to help you protect, maintain and improve your home."
        crumb="Blog"
      />

      {/* Categories */}
      <section className="border-b border-border px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className="text-sm font-700 text-muted-foreground">Browse:</span>
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$category"
              params={{ category: c.slug }}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-600 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-card lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-700 text-primary-foreground">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="text-xs font-700 uppercase tracking-wider text-primary">
                  {blogCategories.find((c) => c.slug === featured.category)?.name}
                </span>
                <h2 className="mt-3 font-display text-2xl font-800 leading-tight text-foreground md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {featured.readTime}</span>
                  <span>By {fAuthor.name}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-700 text-primary">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-700 uppercase tracking-wider text-primary">
          {blogCategories.find((c) => c.slug === post.category)?.name}
        </span>
        <h3 className="mt-2 font-display text-lg font-700 leading-snug text-foreground">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
