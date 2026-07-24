import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import vmnLogo from "@/assets/vmn-logo.jpeg.asset.json";

const WHATSAPP = "https://wa.me/+34689592659";

export function SiteFooter() {
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
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/marcas" className="hover:text-foreground">Marcas</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Contacto
          </div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Calle de Téllez 30, 28007 Madrid, España
            </li>
            <li>
              <a
                href="mailto:clientes@vmntechnology.com"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                clientes@vmntechnology.com
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
              href="mailto:clientes@vmntechnology.com"
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

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(oklch(0.2_0.05_150)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
