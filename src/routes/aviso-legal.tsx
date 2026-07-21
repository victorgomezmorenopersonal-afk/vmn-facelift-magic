import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal · VMN Technology" },
      {
        name: "description",
        content:
          "Aviso legal de VMN Technology: titularidad del sitio web, propiedad intelectual y condiciones de uso.",
      },
      { property: "og:title", content: "Aviso Legal · VMN Technology" },
      {
        property: "og:description",
        content:
          "Titularidad, propiedad intelectual y condiciones de uso del sitio web de VMN Technology.",
      },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <LegalLayout eyebrow="Información legal" title="Aviso Legal">
      <ol className="list-decimal space-y-4 pl-5 marker:text-primary marker:font-semibold">
        <li>
          El titular de este sitio web es{" "}
          <strong className="text-foreground">VICTOR MANUEL GOMEZ PULIDO</strong>, con
          N.I.F. 11825163N, con domicilio en Calle de Téllez 30, Madrid, MADRID 28007,
          España.
        </li>
        <li>
          El acceso al site de VICTOR MANUEL GOMEZ PULIDO es gratuito. Todo el
          contenido es propiedad intelectual de VICTOR MANUEL GOMEZ PULIDO. Cualquier
          utilización de los mismos contraria a las normas en materia de propiedad
          intelectual será perseguida con arreglo a la legislación vigente.
        </li>
      </ol>
    </LegalLayout>
  );
}
