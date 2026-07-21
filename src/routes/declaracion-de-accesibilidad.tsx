import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSectionTitle } from "@/components/LegalLayout";

export const Route = createFileRoute("/declaracion-de-accesibilidad")({
  head: () => ({
    meta: [
      { title: "Declaración de Accesibilidad · VMN Technology" },
      {
        name: "description",
        content:
          "Declaración de accesibilidad del sitio web de VMN Technology conforme al Real Decreto 1112/2018.",
      },
      {
        property: "og:title",
        content: "Declaración de Accesibilidad · VMN Technology",
      },
      {
        property: "og:description",
        content:
          "Situación de cumplimiento, contenido no accesible y datos de contacto en materia de accesibilidad.",
      },
    ],
  }),
  component: Accesibilidad,
});

function Accesibilidad() {
  return (
    <LegalLayout eyebrow="Accesibilidad" title="Declaración de Accesibilidad">
      <LegalSectionTitle>Política de accesibilidad</LegalSectionTitle>
      <p>
        La empresa VMN Technology se ha comprometido a hacer accesible su sitio web de
        conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre
        accesibilidad de los sitios web y aplicaciones para dispositivos móviles del
        sector público, o desarrollos financiados desde Europa.
      </p>
      <p>
        La presente declaración de accesibilidad se aplica al sitio web, excluyendo los
        contenidos incrustados provenientes de otros dominios.
      </p>

      <LegalSectionTitle>Situación de cumplimiento</LegalSectionTitle>
      <p>
        Este sitio web es{" "}
        <strong className="text-foreground">Parcialmente Conforme</strong> con el RD
        1112/2018 debido a la falta de conformidad de los aspectos que se indican a
        continuación.
      </p>

      <LegalSectionTitle>Contenido no accesible</LegalSectionTitle>
      <p>El contenido que se recoge a continuación no es accesible por los siguientes motivos:</p>
      <ul className="list-disc space-y-2 pl-5 marker:text-primary">
        <li>Falta de conformidad:</li>
        <li>
          Algunas de las páginas no tienen definido su título correctamente - Requisito
          número 9.2.4.2 Titulado de páginas de UNE-EN 301549:2022.
        </li>
        <li>
          Pueden existir algunas imágenes cuya alternativa no esté implementada o no
          sea correcta – Requisito 9.1.1.1 Contenido no textual UNE-EN 301549:2022.
        </li>
        <li>
          Pueden existir encabezados que no sean claros o breves, o que no deberían ser
          encabezados – Requisito número 9.2.4.6 Encabezados y etiquetas de UNE-EN
          301549:2022.
        </li>
        <li>
          Puede haber campos de formulario donde su etiqueta no sea correcta o no
          exista – Requisito número 9.2.5.3 Inclusión de la etiqueta en el nombre de
          UNE-EN 301549:2022 y requisito 9.3.3.2 Etiquetas o instrucciones de UNE-EN
          301549:2022.
        </li>
        <li>Podrían existir fallos puntuales de edición en alguna página web.</li>
        <li>Carga desproporcionada: No resulta aplicable.</li>
        <li>El contenido no entra dentro del ámbito de la legislación aplicable.</li>
      </ul>
      <p>
        Podrían existir archivos ofimáticos en PDF u otros formatos publicados antes
        del 20 de septiembre de 2018 que no cumplan en su totalidad todos los
        requisitos de accesibilidad.
      </p>
      <p>
        Puede haber contenidos de terceros que no estén desarrollados en esta Unidad,
        ni bajo su control, como archivos ofimáticos de diferentes organismos que deban
        publicarse en este sitio.
      </p>

      <LegalSectionTitle>Observaciones y datos de contacto</LegalSectionTitle>
      <p>
        Puede realizar comunicaciones sobre requisitos de accesibilidad [artículo
        10.2.a) del RD 1112/2018] como, por ejemplo:
      </p>
      <ul className="list-disc space-y-2 pl-5 marker:text-primary">
        <li>Informar sobre cualquier posible incumplimiento por parte de este sitio web.</li>
        <li>Transmitir otras dificultades de acceso al contenido.</li>
        <li>
          Formular cualquier otra consulta o sugerencia de mejora relativa a la
          accesibilidad del sitio web poniéndose en contacto con VMN Technology.
        </li>
      </ul>
      <p>Puede presentar:</p>
      <ul className="list-disc space-y-2 pl-5 marker:text-primary">
        <li>Una queja relativa al cumplimiento de los requisitos del RD 1112/2018.</li>
        <li>Una solicitud de información accesible relativa a:</li>
        <li>
          Contenidos que están excluidos del ámbito de aplicación del RD 1112/2018
          según lo establecido por el artículo 3, apartado 4.
        </li>
        <li>
          Contenidos que están exentos del cumplimiento de los requisitos de
          accesibilidad por imponer una carga desproporcionada.
        </li>
      </ul>
      <p>
        En la solicitud de información accesible, se debe concretar, con toda claridad,
        los hechos, razones y petición que permitan constatar que se trata de una
        solicitud razonable y legítima.
      </p>
    </LegalLayout>
  );
}
