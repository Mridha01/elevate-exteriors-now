import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedServices } from "@/components/RelatedServices";
import { BlogCard, formatDate } from "@/routes/blog.index";
import { getPost, getCategory, blogPosts, authors } from "@/lib/blog";
import { company } from "@/lib/site";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return { meta: [{ title: "Article | Precision Roofing & Exteriors" }] };
    const path = `/blog/${post.slug}`;
    const author = authors[post.author];
    return {
      meta: [
        { title: `${post.title} | Precision Roofing & Exteriors` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.excerpt,
              path,
              image: post.image,
              datePublished: post.date,
              authorName: author.name,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: path },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(post.faqs)) },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const path = `/blog/${post.slug}`;
  const author = authors[post.author];
  const category = getCategory(post.category);
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFallback =
    related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Header */}
      <header className="bg-gradient-ink px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: path },
            ]}
          />
          {category && (
            <Link
              to="/blog/category/$category"
              params={{ category: category.slug }}
              className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-700 uppercase tracking-wider text-primary-glow"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-4 font-display text-3xl font-800 leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="size-4" /> {post.readTime}</span>
            <span>By {author.name}</span>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className="px-6">
        <div className="mx-auto -mt-8 max-w-4xl overflow-hidden rounded-3xl border border-border shadow-elegant md:-mt-10">
          <img src={post.image} alt={post.imageAlt} loading="eager" className="aspect-[16/9] w-full object-cover" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_280px]">
        {/* Body */}
        <div>
          <p className="text-lg leading-relaxed text-foreground/90">{post.intro}</p>
          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-700 text-foreground">{section.heading}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="mt-6">
                    <h3 className="font-display text-lg font-700 text-foreground">{sub.heading}</h3>
                    <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground">
                      {sub.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* Author */}
          <div className="mt-12 flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-lg font-700 text-primary-foreground">
              {author.initials}
            </span>
            <div>
              <p className="font-display text-base font-700 text-foreground">{author.name}</p>
              <p className="text-xs font-600 uppercase tracking-wider text-primary">{author.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
            </div>
          </div>
        </div>

        {/* Sidebar: TOC + CTA */}
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-sm font-700 uppercase tracking-wider text-foreground">
              Table of contents
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {post.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-primary">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center shadow-sm">
            <h2 className="font-display text-lg font-700 text-foreground">Need a free estimate?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Talk to our team about your project today.</p>
            <Button asChild variant="hero" size="lg" className="mt-4 w-full">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild variant=" link" size="sm" className="mt-1 w-full">
              <a href={company.phoneHref}><Phone className="size-4" /> {company.phoneDisplay}</a>
            </Button>
          </div>
        </aside>
      </div>

      <RelatedServices
        slugs={post.relatedServices}
        eyebrow="Related Services"
        title="Services mentioned in this article"
      />

      <FaqAccordion faqs={post.faqs} title="Article FAQs" description="Quick answers related to this topic." />

      {/* Related posts */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-700 text-foreground">Related articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedFallback.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-ink px-6 py-16 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-800 text-white sm:text-3xl">Ready to protect your home?</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">
            Get a free, no-obligation estimate from the team trusted by hundreds of local homeowners.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Get Free Estimate</Link></Button>
            <Button asChild variant="outline-light" size="xl">
              <a href={company.phoneHref}><Phone /> {company.phoneDisplay}</a>
            </Button>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
