import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { BlogCard } from "@/routes/blog.index";
import { getCategory, postsByCategory, blogCategories } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/blog/category/$category")({
  head: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) return { meta: [{ title: "Blog Category | Precision Roofing & Exteriors" }] };
    const path = `/blog/category/${category.slug}`;
    return {
      meta: [
        { title: `${category.name} Articles | Precision Roofing & Exteriors Blog` },
        { name: "description", content: category.description },
        {
          property: "og:title",
          content: `${category.name} Articles | Precision Roofing & Exteriors`,
        },
        { property: "og:description", content: category.description },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: category.name, href: path },
            ]),
          ),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: slug } = Route.useParams();
  const category = getCategory(slug)!;
  const posts = postsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow="Blog Category"
        title={category.name}
        description={category.description}
        crumb={category.name}
      />

      <section className="border-b border-border px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <Link
            to="/blog"
            className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-600 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            All Posts
          </Link>
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$category"
              params={{ category: c.slug }}
              activeProps={{ className: "border-primary text-primary" }}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-600 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No articles in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
