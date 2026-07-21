import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import vmnLogo from "@/assets/vmn-logo.jpeg.asset.json";

export function LegalLayout({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(oklch(0.2_0.05_150)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-legal space-y-5 text-muted-foreground">
          {children}
        </article>
      </main>

      <footer className="border-t border-border/60 bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <div>© 2026 VMN Technology · Todos los derechos reservados</div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/aviso-legal" className="hover:text-foreground">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-foreground">Política de privacidad</Link>
            <Link to="/politica-de-cookies" className="hover:text-foreground">Política de cookies</Link>
            <Link to="/declaracion-de-accesibilidad" className="hover:text-foreground">Accesibilidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function LegalSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}
