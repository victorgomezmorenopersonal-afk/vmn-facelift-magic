import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MessageCircle, User } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero, SiteFooter } from "@/components/SiteFooter";
import { posts } from "@/lib/blog-posts";

const WHATSAPP = "https://wa.me/+34689592659";



export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · VMN Technology — Novedades y consejos de telefonía móvil" },
      {
        name: "description",
        content:
          "Blog de VMN Technology. Novedades, consejos y tendencias sobre smartphones nuevos y reacondicionados, tablets y dispositivos tecnológicos.",
      },
      { property: "og:title", content: "Blog de VMN Technology" },
      {
        property: "og:description",
        content:
          "Artículos, comparativas y recomendaciones sobre telefonía móvil para profesionales y particulares.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero eyebrow="Blog" title="Blog de VMN Technology">
        <p>
          Bienvenido al <strong className="text-foreground">blog de VMN Technology</strong>,
          un espacio donde compartimos información útil, novedades y consejos
          sobre el mundo de la telefonía móvil y la tecnología.
        </p>
      </PageHero>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5 text-muted-foreground">
              <p>
                Como{" "}
                <strong className="text-foreground">
                  mayorista y distribuidor de móviles en Madrid
                </strong>
                , queremos ofrecer contenido de interés tanto para profesionales
                del sector como para particulares que desean mantenerse al día
                sobre las últimas tendencias en{" "}
                <strong className="text-foreground">
                  smartphones nuevos y reacondicionados
                </strong>
                , tablets, smartwatches y otros dispositivos tecnológicos.
              </p>
              <p>
                Encontrarás artículos sobre lanzamientos de las principales
                marcas, comparativas de dispositivos, recomendaciones de compra,
                consejos para sacar el máximo partido a tu tecnología y noticias
                del mercado de la telefonía.
              </p>
              <p>
                Nuestro objetivo es convertir este espacio en un punto de
                referencia donde puedas resolver dudas, descubrir nuevas
                tendencias y tomar decisiones de compra mejor informadas.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Asesoramiento personalizado
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                ¿Necesitas ayuda para elegir un dispositivo?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Si necesitas asesoramiento personalizado o quieres resolver
                cualquier duda sobre nuestros productos, puedes contactarnos
                directamente a través de WhatsApp.
              </p>
              <a
                href={WHATSAPP}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Últimas publicaciones
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Novedades, consejos y tendencias
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="relative aspect-[16/10] overflow-hidden bg-gradient-soft"
                >
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
                </Link>

                <div className="flex flex-1 flex-col gap-4 p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {p.author}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug tracking-tight">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="transition-colors hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Leer artículo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-soft" />
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            ¿Quieres más información?
          </h4>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Necesitas ayuda para elegir el dispositivo ideal?
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Ponte en contacto con nosotros hoy mismo y descubre todo lo que
            podemos ofrecerte en{" "}
            <strong className="text-foreground">VMN Technology</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Contactar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
