import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";
import newPhones from "@/assets/new-phones.jpg";
import refurbishedPhones from "@/assets/refurbished-phones.jpg";
import quality from "@/assets/quality.jpg";
import vmnLogo from "@/assets/vmn-logo.jpeg.asset.json";
import { SiteHeader } from "@/components/SiteHeader";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "VMN Technology · Mayorista y distribuidor de móviles en Madrid",
      },
      {
        name: "description",
        content:
          "Mayorista y distribuidor de smartphones nuevos y reacondicionados en Madrid. Stock actualizado, precios para profesionales y envíos rápidos a toda España.",
      },
      {
        property: "og:title",
        content: "VMN Technology · Distribuidor de móviles en Madrid",
      },
      {
        property: "og:description",
        content:
          "Smartphones nuevos y reacondicionados grado A y A+ para profesionales. Stock real, envíos rápidos y atención personalizada.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/+34689592659";
const CONTACT = "https://www.vmntechnology.es/contacto";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Trust />
      <About />
      <WhatsappCTA />
      <Products />
      <Quality />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { label: "Inicio", to: "/" as const },
    { label: "Nosotros", to: "/nosotros" as const },
    { label: "Marcas", to: "/marcas" as const },
    { label: "Blog", to: "/blog" as const },
    { label: "Contacto", to: "/contacto" as const },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={vmnLogo.url}
            alt="VMN Technology"
            className="h-11 w-11 rounded-xl object-contain shadow-soft"
          />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight text-primary">
              VMN
            </div>
            <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Technology
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contacto"
          className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Contactar <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contacto"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground md:hidden"
        >
          Contactar
        </Link>
      </div>
    </header>
  );
}


function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(oklch(0.2_0.05_150)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Somos VMN Technology, tu socio en soluciones tecnológicas
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Mayorista y distribuidor de{" "}
            <span className="text-gradient-primary">móviles en Madrid</span>{" "}
            para profesionales
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Smartphones nuevos y reacondicionados grado A y A+ para tiendas,
            distribuidores y empresas. Stock real, precios competitivos y
            envíos rápidos a toda España.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Contactar <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {[
              { k: "Stock", v: "Real" },
              { k: "Envío", v: "Rápido" },
              { k: "Grado", v: "A / A+" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-elegant animate-float">
            <img
              src={heroDevices}
              alt="Smartphones, smartwatch y auriculares premium"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Package, label: "Stock actualizado" },
    { icon: Truck, label: "Envíos a toda España" },
    { icon: ShieldCheck, label: "Equipos garantizados" },
    { icon: Zap, label: "Atención personalizada" },
  ];
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <i.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {i.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sobre nosotros
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tu aliado de confianza en la distribución de smartphones
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                En <strong className="text-foreground">VMN Technology</strong>{" "}
                somos un{" "}
                <strong className="text-foreground">
                  mayorista y distribuidor de móviles en Madrid
                </strong>{" "}
                especializado en la venta de{" "}
                <strong className="text-foreground">
                  smartphones nuevos y reacondicionados
                </strong>{" "}
                para tiendas de telefonía, distribuidores, empresas de
                informática, comercios online y profesionales del sector.
              </p>
              <p>
                Trabajamos con las principales marcas del mercado, ofreciendo
                un amplio catálogo de dispositivos con{" "}
                <strong className="text-foreground">stock actualizado</strong>,
                precios competitivos y un servicio rápido y personalizado.
              </p>
              <p>
                Nuestro objetivo es ayudarte a hacer crecer tu negocio con
                equipos de calidad, tanto nuevos como seminuevos de{" "}
                <strong className="text-foreground">grado A y A+</strong>,
                cuidadosamente revisados y garantizados. Además, realizamos{" "}
                <strong className="text-foreground">
                  envíos rápidos a toda España
                </strong>
                , para que puedas disponer del producto cuando lo necesites, o
                si lo prefieres, puedes recoger tu pedido en nuestras
                instalaciones de Madrid.
              </p>
            </div>
          </div>

          <div id="marcas">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              El proveedor que impulsa tu negocio
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Un catálogo multimarca pensado para profesionales
            </h3>
            <p className="mt-5 text-muted-foreground">
              En VMN Technology entendemos las necesidades de los profesionales
              del sector. Por eso ponemos a tu disposición un catálogo
              multimarca con dispositivos Apple, Samsung, Xiaomi, Funker y
              otros fabricantes de referencia. Nuestra{" "}
              <strong className="text-foreground">
                rotación continua de producto
              </strong>{" "}
              nos permite ofrecer disponibilidad constante y soluciones
              adaptadas a cada cliente.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Apple", "Samsung", "Xiaomi", "Funker", "+ más marcas"].map(
                (b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
            <p className="mt-6 text-muted-foreground">
              Trabajamos directamente contigo, sin intermediarios, para
              ofrecerte{" "}
              <strong className="text-foreground">
                precios pensados para la reventa
              </strong>
              , asesoramiento personalizado y una atención cercana durante todo
              el proceso de compra. Tanto si buscas una unidad como grandes
              volúmenes de dispositivos, encontrarás una solución adaptada a
              tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsappCTA() {
  return (
    <section className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-elegant sm:p-12">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="text-primary-foreground">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              ¿Necesitas disponibilidad inmediata o un presupuesto
              personalizado?
            </h3>
            <p className="mt-3 max-w-2xl text-primary-foreground/90">
              <strong>Contacta con nosotros por WhatsApp</strong> y uno de
              nuestros especialistas te asesorará rápidamente para ayudarte a
              encontrar los equipos que mejor se adapten a tu negocio.
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
  );
}

function Products() {
  const products = [
    {
      img: newPhones,
      tag: "Nuevos",
      title: "Smartphones nuevos",
      body:
        "Descubre nuestra selección de móviles nuevos de las principales marcas del mercado, ideales para ofrecer a tus clientes productos actuales con garantía oficial y máxima fiabilidad. Disponemos de modelos actualizados con stock constante y precios competitivos para profesionales.",
      cta: "Accede ahora a nuestra sección de móviles nuevos y encuentra los dispositivos que mejor encajan con tu negocio.",
      href: "https://www.vmntechnology.es/equipos-nuevos",
    },
    {
      img: refurbishedPhones,
      tag: "Reacondicionados",
      title: "Smartphones reacondicionados",
      body:
        "Si buscas una opción más económica sin renunciar a la calidad, nuestros smartphones reacondicionados grado A y A+ son la solución perfecta. Equipos revisados, testados y listos para su uso, ideales para ampliar tu catálogo con productos de alta rotación y excelente margen.",
      cta: "Explora nuestra sección de móviles reacondicionados y aprovecha las mejores oportunidades del mercado.",
      href: "https://www.vmntechnology.es/equipos-seminuevos",
    },
  ];

  return (
    <section id="productos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nuestros equipos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Accede directamente a nuestros equipos nuevos y reacondicionados
          </h2>
          <p className="mt-4 text-muted-foreground">
            En VMN Technology te facilitamos el acceso directo a nuestras
            principales líneas de producto para que encuentres rápidamente lo
            que necesitas según tu modelo de negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-muted-foreground">{p.body}</p>
                <p className="text-sm font-medium text-foreground">{p.cta}</p>
                <a
                  href={p.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  Ver más <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Todas las garantías",
      body:
        "Cada equipo es revisado antes de su entrega para asegurar su correcto funcionamiento.",
    },
    {
      icon: Package,
      title: "Stock permanente",
      body:
        "Los pedidos se preparan con rapidez para realizar envíos seguros a cualquier punto de España.",
    },
    {
      icon: MessageCircle,
      title: "Atención cercana",
      body:
        "Nuestro equipo está disponible para resolver cualquier consulta a través de WhatsApp.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-elegant">
            <img
              src={quality}
              alt="Control de calidad de smartphones"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nuestro compromiso
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Calidad, rapidez y confianza en cada pedido
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nuestro compromiso es ofrecer{" "}
            <strong className="text-foreground">
              smartphones nuevos y reacondicionados en Madrid
            </strong>{" "}
            con todas las garantías. Cada equipo es revisado antes de su
            entrega para asegurar su correcto funcionamiento, proporcionando a
            nuestros clientes la tranquilidad de trabajar con un proveedor
            fiable.
          </p>
          <p className="mt-4 text-muted-foreground">
            Gracias a nuestro{" "}
            <strong className="text-foreground">stock permanente</strong>, los
            pedidos se preparan con rapidez para realizar envíos seguros a
            cualquier punto de España. Además, nuestro equipo está disponible
            para resolver cualquier consulta y ofrecer un servicio cercano y
            ágil a través de WhatsApp.
          </p>
          <p className="mt-4 text-muted-foreground">
            Si buscas un{" "}
            <strong className="text-foreground">
              distribuidor de móviles en Madrid
            </strong>{" "}
            que combine calidad, precios competitivos y atención personalizada,
            en VMN Technology encontrarás un aliado para impulsar tu negocio
            con la mejor tecnología del mercado.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card p-10 text-center shadow-elegant sm:p-16">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          ¿Buscas un proveedor de móviles de confianza?
        </h4>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Confía en <span className="text-gradient-primary">VMN Technology</span>
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Accede a un amplio catálogo de dispositivos nuevos y reacondicionados
          con <strong className="text-foreground">stock real</strong>, envío
          rápido y atención personalizada.{" "}
          <strong className="text-foreground">
            Contacta con nosotros hoy mismo
          </strong>{" "}
          y solicita información sin compromiso.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Contactar <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={vmnLogo.url}
              alt="VMN Technology"
              className="h-12 w-12 rounded-xl object-contain shadow-soft"
            />
            <div className="leading-tight">
              <div className="font-display text-xl font-bold tracking-tight text-primary">
                VMN Technology
              </div>
              <div className="-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Mayorista de móviles · Madrid
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Distribución de smartphones nuevos y reacondicionados para
            profesionales. Stock real, envíos rápidos a toda España y atención
            personalizada.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Navegación
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:text-foreground">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-foreground">Nosotros</a></li>
            <li><a href="#productos" className="hover:text-foreground">Venta de equipos</a></li>
            <li><a href={CONTACT} className="hover:text-foreground">Contacto</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Contacto
          </div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Madrid, España
            </li>
            <li>
              <a
                href="mailto:clientes@vmn-tecnology.com"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                clientes@vmn-tecnology.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> +34 689 592 659
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2">
            <a
              href="https://facebook.com/VmnTechnologyMadrid"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/vmntechnology/"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="mailto:clientes@vmn-tecnology.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <div>© 2026 VMN Technology · Todos los derechos reservados</div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/aviso-legal" className="hover:text-foreground">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-foreground">Política de privacidad</Link>
            <Link to="/politica-de-cookies" className="hover:text-foreground">Política de cookies</Link>
            <Link to="/declaracion-de-accesibilidad" className="hover:text-foreground">Accesibilidad</Link>
          </nav>
        </div>
      </div>

      <a
        href={WHATSAPP}
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}
