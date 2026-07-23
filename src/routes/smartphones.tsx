import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MessageCircle, User } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero, SiteFooter } from "@/components/SiteFooter";
import { getPostBySlug, type BlogPost } from "@/lib/blog-posts";

const WHATSAPP = "https://wa.me/+34689592659";

const SLUGS = [
  "smartphones-nuevos-madrid",
  "smartphones-reacondicionados-alta-gama-madrid",
] as const;

export const Route = createFileRoute("/smartphones")({
  head: () => ({
    meta: [
      {
        title:
          "Smartphones nuevos y reacondicionados en Madrid · VMN Technology",
      },
      {
        name: "description",
        content:
          "Distribuidor en Madrid de smartphones nuevos y reacondicionados grado A y A+. Stock inmediato, precios para profesionales y garantía en todos los equipos.",
      },
      {
        property: "og:title",
        content: "Smartphones nuevos y reacondicionados · VMN Technology",
      },
      {
        property: "og:description",
        content:
          "Móviles nuevos con garantía oficial y reacondicionados de alta gama revisados por técnicos. Envíos a toda España.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SmartphonesPage,
});

function SmartphonesPage() {
  const items = SLUGS.map((s) => getPostBySlug(s)).filter(
    (p): p is BlogPost => Boolean(p),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Smartphones nuevos y reacondicionados"
        title="Móviles nuevos y reacondicionados en Madrid"
      >
        <p>
          En <strong className="text-foreground">VMN Technology</strong>{" "}
          disponemos de un catálogo completo de{" "}
          <strong className="text-foreground">smartphones nuevos</strong> de las
          principales marcas y de{" "}
          <strong className="text-foreground">
            móviles reacondicionados de alta gama
          </strong>{" "}
          en grado A y A+, revisados por nuestros técnicos y con garantía.
        </p>
      </PageHero>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5 text-muted-foreground">
              <p>
                Trabajamos como{" "}
                <strong className="text-foreground">
                  mayorista y distribuidor en Madrid
                </strong>{" "}
                para tiendas de telefonía, distribuidores, empresas de
                informática y profesionales que necesitan productos originales,
                con procedencia garantizada y a precios competitivos.
              </p>
              <p>
                Nuestro sistema de stock dinámico permite ofrecer{" "}
                <strong className="text-foreground">
                  disponibilidad inmediata
                </strong>{" "}
                y envíos rápidos a toda España, tanto en equipos nuevos como en
                reacondicionados.
              </p>
              <p>
                A continuación puedes acceder a los dos apartados principales
                para conocer las ventajas, el proceso de revisión y todo lo que
                incluye trabajar con nosotros.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Consulta de stock
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                ¿Quieres conocer nuestro stock disponible?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Escríbenos por WhatsApp y te informamos en tiempo real sobre
                modelos, capacidades y precios de nuestros equipos nuevos y
                reacondicionados.
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
              Nuestras líneas de producto
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Elige la sección que mejor encaja con tu negocio
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {items.map((p) => (
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

                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {p.author}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="transition-colors hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">{p.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
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
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-elegant sm:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-primary-foreground">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Solicita tu presupuesto personalizado
              </h3>
              <p className="mt-3 max-w-2xl text-primary-foreground/90">
                Contacta con nuestro equipo y descubre las condiciones,
                promociones y ventajas exclusivas que tenemos para
                profesionales.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-soft"
            >
              Contactar <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
