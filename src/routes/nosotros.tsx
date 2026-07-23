import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero, SiteFooter } from "@/components/SiteFooter";

const WHATSAPP = "https://wa.me/+34689592659";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros · VMN Technology — Mayorista de móviles en Madrid" },
      {
        name: "description",
        content:
          "Conoce VMN Technology, mayorista de móviles en Madrid especializado en smartphones nuevos y reacondicionados para profesionales y particulares.",
      },
      { property: "og:title", content: "Sobre VMN Technology en Madrid" },
      {
        property: "og:description",
        content:
          "Años ofreciendo soluciones de telefonía a tiendas, distribuidores, e-commerce y particulares. Catálogo multimarca, stock real y atención cercana.",
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero eyebrow="Sobre nosotros" title="Sobre VMN Technology en Madrid">
        <p>
          En <strong className="text-foreground">VMN Technology</strong>{" "}
          llevamos años ofreciendo soluciones de telefonía para profesionales
          que buscan un{" "}
          <strong className="text-foreground">mayorista de móviles en Madrid</strong>{" "}
          con precios competitivos, disponibilidad inmediata y un servicio
          cercano.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div className="space-y-5 text-muted-foreground">
            <p>
              Nos hemos consolidado como un proveedor de confianza para tiendas
              de telefonía, distribuidores, empresas de informática, e-commerce
              y también para particulares que buscan dispositivos de calidad.
            </p>
            <p>
              Nuestro trabajo se basa en ofrecer un{" "}
              <strong className="text-foreground">amplio catálogo multimarca</strong>{" "}
              con smartphones, tablets, smartwatches y otros dispositivos
              tecnológicos, tanto nuevos como reacondicionados. Todos nuestros
              equipos son cuidadosamente revisados para garantizar su correcto
              funcionamiento antes de llegar a nuestros clientes.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Comprometidos con nuestros clientes
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Un buen proveedor debe ser mucho más que un vendedor
            </h2>
            <p className="mt-4 text-muted-foreground">
              Por eso ofrecemos una atención directa y personalizada, asesorando
              a cada cliente según sus necesidades y ayudándole a encontrar la
              mejor opción para su negocio.
            </p>
            <p className="mt-3 text-muted-foreground">
              Disponemos de{" "}
              <strong className="text-foreground">stock actualizado</strong>,
              rotación constante de producto y precios pensados para la
              reventa, permitiendo que nuestros clientes puedan responder
              rápidamente a la demanda del mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Nuestra filosofía
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Calidad, confianza y rapidez
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nuestra filosofía se basa en ofrecer un servicio ágil y
              transparente. Trabajamos directamente con nuestros clientes, sin
              intermediarios, lo que nos permite ofrecer mejores condiciones
              comerciales y una atención mucho más cercana.
            </p>
            <p className="mt-3 text-muted-foreground">
              Además de disponer de{" "}
              <strong className="text-foreground">
                equipos nuevos y reacondicionados grados A y A+
              </strong>
              , realizamos{" "}
              <strong className="text-foreground">envíos rápidos a toda España</strong>{" "}
              para que puedas recibir tu pedido en el menor tiempo posible.
            </p>
            <p className="mt-3 text-muted-foreground">
              Nuestro compromiso es seguir siendo un referente como{" "}
              <strong className="text-foreground">
                distribuidor de smartphones en Madrid
              </strong>
              , ofreciendo siempre productos de calidad, precios competitivos y
              un servicio profesional.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, title: "Equipos revisados", body: "Todos los dispositivos pasan un control antes de la entrega." },
              { icon: Package, title: "Stock real", body: "Rotación constante y disponibilidad inmediata." },
              { icon: Truck, title: "Envíos rápidos", body: "Entregas seguras a cualquier punto de España." },
              { icon: Handshake, title: "Trato directo", body: "Sin intermediarios y con condiciones para reventa." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-elegant sm:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-primary-foreground">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                ¿Quieres conocer nuestra disponibilidad actual?
              </h3>
              <p className="mt-3 max-w-2xl text-primary-foreground/90">
                Escríbenos por WhatsApp y te informaremos del stock disponible y
                de las mejores oportunidades para tu negocio.
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

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10 text-center shadow-elegant sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-soft" />
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Trabajemos juntos
            </h4>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Un aliado fiable para tu negocio
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Si buscas un proveedor fiable para tu negocio o quieres ampliar tu
              catálogo con dispositivos de primeras marcas,{" "}
              <strong className="text-foreground">VMN Technology</strong> está
              preparado para ayudarte. Descubre por qué cada vez más
              profesionales confían en nosotros para abastecer su negocio.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Contactar <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Distribuidor de confianza en Madrid
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
