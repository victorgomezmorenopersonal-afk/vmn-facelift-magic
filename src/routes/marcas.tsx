import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero, SiteFooter } from "@/components/SiteFooter";
import brandApple from "@/assets/brand-apple.jpg";
import brandSamsung from "@/assets/brand-samsung.jpg";
import brandXiaomi from "@/assets/brand-xiaomi.jpg";
import brandFunker from "@/assets/brand-funker.jpg";



const WHATSAPP = "https://wa.me/+34689592659";

const brands = [
  {
    name: "Apple",
    tag: "Premium",
    body:
      "Disponemos de una amplia selección de iPhone nuevos y reacondicionados, revisados y clasificados en los mejores grados de conservación. Son una excelente opción para negocios que buscan ofrecer dispositivos premium con total garantía.",
    image: brandApple,
    slug: "por-que-comprar-apple-iphone-distribuidor",
  },
  {
    name: "Samsung",
    tag: "Multi-gama",
    body:
      "Contamos con una gran variedad de smartphones Samsung, desde las gamas más económicas hasta los modelos Galaxy de alta gama, siempre con disponibilidad constante y precios adaptados a profesionales.",
    image: brandSamsung,
    slug: "por-que-comprar-samsung-galaxy-distribuidor",
  },
  {
    name: "Xiaomi",
    tag: "Calidad-precio",
    body:
      "La marca Xiaomi destaca por ofrecer dispositivos con una excelente relación calidad-precio. Disponemos de los modelos más demandados para que puedas ampliar tu catálogo con una de las marcas con mayor crecimiento del mercado.",
    image: brandXiaomi,
    slug: "por-que-comprar-xiaomi-distribuidor",
  },
  {
    name: "Funker",
    tag: "Funcional",
    body:
      "También distribuimos dispositivos Funker, una alternativa práctica y funcional para clientes que buscan equipos fiables y asequibles, ideales para diferentes perfiles de usuario.",
    image: brandFunker,
    slug: "por-que-comprar-funker-distribuidor",
  },
];


export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas · VMN Technology — Apple, Samsung, Xiaomi y Funker" },
      {
        name: "description",
        content:
          "Distribuimos las principales marcas de smartphones en Madrid: Apple, Samsung, Xiaomi, Funker y más. Nuevos y reacondicionados con stock actualizado.",
      },
      { property: "og:title", content: "Marcas de móviles que distribuimos en Madrid" },
      {
        property: "og:description",
        content:
          "Catálogo multimarca con Apple, Samsung, Xiaomi y Funker. Dispositivos revisados y garantizados para profesionales y particulares.",
      },
    ],
  }),
  component: MarcasPage,
});

function MarcasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Nuestras marcas"
        title="Marcas de móviles que distribuimos en Madrid"
      >
        <p>
          En <strong className="text-foreground">VMN Technology</strong>{" "}
          trabajamos con las marcas de telefonía más reconocidas del mercado
          para ofrecer un catálogo completo de{" "}
          <strong className="text-foreground">
            smartphones nuevos y reacondicionados
          </strong>{" "}
          con stock actualizado, precios competitivos y envío rápido a cualquier
          punto de España.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fabricantes líderes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Las principales marcas para profesionales
            </h2>
            <p className="mt-4 text-muted-foreground">
              En nuestro catálogo encontrarás dispositivos de fabricantes
              líderes, reconocidos por su calidad, innovación y fiabilidad.
              Gracias a nuestra rotación constante de producto, podemos ofrecer
              disponibilidad continua y asesoramiento personalizado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {brands.map((b) => (
              <article
                key={b.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-soft">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {b.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {b.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{b.body}</p>
                  <a
                    href={WHATSAPP}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    Consultar stock <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-elegant sm:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-primary-foreground">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                ¿Necesitas conocer el stock disponible de alguna marca?
              </h3>
              <p className="mt-3 max-w-2xl text-primary-foreground/90">
                Contacta con nosotros por WhatsApp y te informaremos en tiempo
                real sobre la disponibilidad de los modelos que necesitas.
              </p>
            </div>
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10 text-center shadow-elegant sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-soft" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Tu distribuidor multimarca de confianza
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Encuentra la marca que necesitas
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              En <strong className="text-foreground">VMN Technology</strong>{" "}
              trabajamos para ofrecer un servicio profesional basado en{" "}
              <strong className="text-foreground">stock real</strong>, envíos
              rápidos, atención personalizada y precios competitivos. Confía en
              nosotros para acceder a un catálogo multimarca con las mejores
              condiciones para profesionales y particulares.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Solicitar presupuesto <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
