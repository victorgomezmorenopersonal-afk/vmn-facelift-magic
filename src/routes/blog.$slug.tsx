import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, MessageCircle, User } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getPostBySlug, posts, type BlogSection } from "@/lib/blog-posts";

const WHATSAPP = "https://wa.me/+34689592659";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [
          { title: "Artículo no encontrado · Blog VMN Technology" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} · Blog VMN Technology` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Artículo no encontrado
        </h1>
        <p className="mt-4 text-muted-foreground">
          El artículo que buscas no existe o ha sido movido.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al blog
        </Link>
      </section>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Ha ocurrido un error
        </h1>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
        >
          Reintentar
        </button>
      </section>
      <SiteFooter />
    </div>
  ),
  component: BlogPostPage,
});

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="mt-12 font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="mt-8 font-display text-xl font-semibold tracking-tight"
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={index}
          className="mt-4 text-muted-foreground [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      );
    case "ul":
      return (
        <ul
          key={index}
          className="mt-4 space-y-2 pl-5 text-muted-foreground [&_strong]:text-foreground"
        >
          {section.items.map((item, i) => (
            <li
              key={i}
              className="list-disc marker:text-primary"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );
  }
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="relative">
        <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al blog
          </Link>
          <div className="mt-6">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.tag}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elegant">
            <img
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-display text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            {post.lead}
          </p>
          <div className="mt-4">
            {post.sections.map((s, i) => renderSection(s, i))}
          </div>
        </div>
      </article>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-elegant sm:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-primary-foreground">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                ¿Quieres conocer nuestro stock disponible?
              </h3>
              <p className="mt-3 max-w-2xl text-primary-foreground/90">
                Escríbenos por WhatsApp y te asesoraremos sobre los modelos y
                condiciones que mejor se adaptan a tu negocio.
              </p>
            </div>
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-soft"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Sigue leyendo
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Otros artículos del blog
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Leer artículo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </div>
  );
}
