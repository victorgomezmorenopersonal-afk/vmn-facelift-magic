import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies · VMN Technology" },
      {
        name: "description",
        content:
          "Política de cookies de VMN Technology y gestión de las preferencias de cookies del sitio web.",
      },
      { property: "og:title", content: "Política de Cookies · VMN Technology" },
      {
        property: "og:description",
        content:
          "Información sobre el uso de cookies en el sitio web de VMN Technology.",
      },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalLayout eyebrow="Cookies" title="Política de Cookies">
      <p>Preferencias de cookies</p>
      <p>
        <a
          href="#"
          className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-secondary"
        >
          Manage Cookie Settings
        </a>
      </p>
    </LegalLayout>
  );
}
