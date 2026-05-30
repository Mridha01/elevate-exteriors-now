import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Precision Roofing & Exteriors | Roofing, Siding & Gutters" },
      {
        name: "description",
        content:
          "Premium roofing, siding, gutters, windows and exterior solutions built to last. Licensed, insured, financing available. Get your free estimate today.",
      },
      { name: "author", content: "Precision Roofing and Exteriors LLC" },
      { name: "theme-color", content: "#d23b32" },
      { property: "og:title", content: "Precision Roofing & Exteriors | Roofing, Siding & Gutters" },
      {
        property: "og:description",
        content: "Trusted roofing, siding, gutters & exterior solutions built to last.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Precision Roofing & Exteriors" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Precision Roofing & Exteriors | Roofing, Siding & Gutters" },
      { name: "description", content: "Project Zenith Elevation is a premium website redesign for a roofing and exterior contractor, focusing on lead generation and trust." },
      { property: "og:description", content: "Project Zenith Elevation is a premium website redesign for a roofing and exterior contractor, focusing on lead generation and trust." },
      { name: "twitter:description", content: "Project Zenith Elevation is a premium website redesign for a roofing and exterior contractor, focusing on lead generation and trust." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4732414-057f-4318-ace2-97b867f8ee31/id-preview-98e5bc9a--ceff223a-a4bb-44ca-9d09-4853fa8d05a2.lovable.app-1780150437073.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4732414-057f-4318-ace2-97b867f8ee31/id-preview-98e5bc9a--ceff223a-a4bb-44ca-9d09-4853fa8d05a2.lovable.app-1780150437073.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Precision Roofing and Exteriors LLC",
          description:
            "Premium roofing, siding, gutters, windows and exterior solutions for residential and commercial properties.",
          telephone: "+1-844-776-6334",
          email: "info@precisionroofingandexteriors.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1240 Craftsman Way, Suite 200",
            addressLocality: "Boise",
            addressRegion: "ID",
            postalCode: "83702",
            addressCountry: "US",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "480",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
