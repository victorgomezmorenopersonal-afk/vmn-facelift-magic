import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero, SiteFooter } from "@/components/SiteFooter";

const WHATSAPP = "https://wa.me/+34689592659";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · VMN Technology — Mayorista de móviles en Madrid" },
      {
        name: "description",
        content:
          "Contacta con VMN Technology en Madrid. Teléfono, email, WhatsApp y dirección. Atención rápida, cercana y personalizada para profesionales y particulares.",
      },
      { property: "og:title", content: "Contacta con VMN Technology en Madrid" },
      {
        property: "og:description",
        content:
          "Escríbenos por WhatsApp, email o formulario. Horario de lunes a viernes de 10:00 a 17:00 en Calle de Téllez 30, 28007 Madrid.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Contacto"
        title="Contacta con VMN Technology en Madrid"
      >
        <p>
          ¿Buscas un{" "}
          <strong className="text-foreground">mayorista de móviles en Madrid</strong>{" "}
          que te ofrezca una atención rápida, cercana y totalmente
          personalizada? En <strong className="text-foreground">VMN Technology</strong>{" "}
          estamos preparados para ayudarte tanto si eres profesional del sector
          como si eres un particular interesado en adquirir dispositivos de
          calidad.
        </p>
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <InfoCard icon={Clock} title="Horario" lines={["Lunes a viernes", "10:00 – 17:00"]} />
          <InfoCard
            icon={Phone}
            title="Teléfono"
            lines={["+34 689 592 659"]}
            href="tel:+34689592659"
          />
          <InfoCard
            icon={Mail}
            title="Email"
            lines={["clientes@vmntechnology.es"]}
            href="mailto:clientes@vmntechnology.es"
          />
          <InfoCard
            icon={MapPin}
            title="Dirección"
            lines={["Calle de Téllez 30", "28007 Madrid, España"]}
          />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Estamos para ayudarte
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Atención al cliente ágil y eficaz
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Puedes ponerte en contacto con nosotros para consultar la
                  disponibilidad de stock en tiempo real, solicitar un
                  presupuesto ajustado a tus necesidades o resolver cualquier
                  duda relacionada con nuestros{" "}
                  <strong className="text-foreground">
                    smartphones nuevos y reacondicionados
                  </strong>
                  .
                </p>
                <p>
                  Trabajamos con clientes de toda España, ofreciendo envíos
                  rápidos y seguros para que recibas tus dispositivos en el
                  menor tiempo posible. Nos adaptamos tanto a pedidos
                  individuales como a compras al por mayor, siempre manteniendo
                  un trato cercano y profesional.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-primary p-8 shadow-elegant">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  ¿Necesitas una respuesta inmediata?
                </h3>
                <p className="mt-3 text-primary-foreground/90">
                  Si buscas una atención aún más rápida, te recomendamos que nos
                  escribas por WhatsApp. Podremos atenderte de manera directa y
                  resolver tus dudas en cuestión de minutos.
                </p>
                <a
                  href={WHATSAPP}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-16 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
            <iframe
              title="Ubicación VMN Technology"
              src="https://www.google.com/maps?q=Calle+de+T%C3%A9llez+30,+28007+Madrid,+Espa%C3%B1a&output=embed"
              loading="lazy"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10 text-center shadow-elegant sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-soft" />
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Contacta con nosotros
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              <strong className="text-foreground">Contacta con VMN Technology</strong>{" "}
              hoy mismo y descubre todas las ventajas de trabajar con un
              distribuidor de confianza que prioriza la calidad, el servicio y
              la satisfacción del cliente.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+34689592659"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                <Phone className="h-4 w-4" /> Llamar ahora
              </a>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card"
              >
                Conócenos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </div>
      <div className="mt-2 space-y-0.5 font-semibold text-foreground">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [privacyOk, setPrivacyOk] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
    );
    window.location.href = `mailto:clientes@vmntechnology.es?subject=${encodeURIComponent(
      "Consulta desde vmntechnology.es",
    )}&body=${body}`;
    setStatus("sent");
    form.reset();
    setPrivacyOk(false);
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Formulario de contacto
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
        Escríbenos y te responderemos lo antes posible
      </h3>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <Field label="Nombre" name="nombre" required />
        <Field label="Email" name="email" type="email" required />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            required
            rows={5}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner outline-none transition-colors focus:border-primary"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            required
            checked={privacyOk}
            onChange={(e) => setPrivacyOk(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span>
            He leído y acepto la{" "}
            <Link to="/politica-de-privacidad" className="text-primary underline-offset-2 hover:underline">
              Política de privacidad
            </Link>
            . *
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="autorizacion"
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span>Autorizo a contactarme por cualquier medio con fines comerciales.</span>
        </label>

        <button
          type="submit"
          disabled={!privacyOk}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Enviar mensaje <ArrowRight className="h-4 w-4" />
        </button>

        {status === "sent" ? (
          <p className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">
            Gracias por contactar con nosotros. Te responderemos lo antes
            posible.
          </p>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? " *" : null}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
