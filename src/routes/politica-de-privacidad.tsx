import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSectionTitle } from "@/components/LegalLayout";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad · VMN Technology" },
      {
        name: "description",
        content:
          "Información sobre el tratamiento de datos personales en VMN Technology: responsable, finalidades, plazos y derechos.",
      },
      { property: "og:title", content: "Política de Privacidad · VMN Technology" },
      {
        property: "og:description",
        content:
          "Responsable, finalidades, destinatarios, conservación y derechos en el tratamiento de datos personales.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalLayout eyebrow="Protección de datos" title="Política de Privacidad">
      <LegalSectionTitle>Uso y tratamiento de datos de carácter personal</LegalSectionTitle>
      <p>
        Le informamos que los datos de carácter personal que pudieran proporcionarse, a
        través de este sitio web, así como los que pudiera facilitar en el futuro en el
        marco de su relación jurídica con esta entidad, serán incorporados a nuestra
        base de datos.
      </p>
      <p>Se informa sobre los siguientes extremos relativos a la protección de datos:</p>

      <ol className="list-decimal space-y-3 pl-5 marker:text-primary marker:font-semibold">
        <li>
          <strong className="text-foreground">Responsable del tratamiento:</strong>{" "}
          Somos responsables de los datos recogidos en el formulario correspondiente.
        </li>
        <li>Razón social: VICTOR MANUEL GOMEZ PULIDO</li>
        <li>NIF: 11825163N</li>
        <li>Dirección: Calle de Téllez 30, Madrid, MADRID 28007, España</li>
        <li>
          Correo electrónico:{" "}
          <a
            href="mailto:clientes@vmntechnology.com"
            className="text-primary hover:underline"
          >
            clientes@vmntechnology.com
          </a>
        </li>
        <li>
          <strong className="text-foreground">Necesidad del tratamiento:</strong> La
          comunicación de sus datos a través del formulario correspondiente es
          obligatoria para podamos contactar.
        </li>
        <li>
          <strong className="text-foreground">
            Finalidades del tratamiento y legitimación del tratamiento:
          </strong>
        </li>
        <li>
          Gestionar, administrar, prestarle los servicios o facilitarle los productos
          que solicite y, en su caso, para el cumplimiento y ejecución de los contratos
          que pudiera celebrar, conocer mejor sus gustos, adecuar los servicios a sus
          preferencias.
        </li>
        <li>
          Enviarle, por correo postal, correo electrónico y otros medios de
          comunicación electrónica equivalente, comunicaciones comerciales y
          publicitarias sobre nuestros productos y/o servicios.
        </li>
        <li>
          <strong className="text-foreground">Destinatarios:</strong> Contratamos con
          alguna entidad que prestan servicios como los de mantenimiento y hosting, a
          través de contratos de encargo del tratamiento para dar soporte a los fines
          de tratamiento indicados.
        </li>
        <li>
          <strong className="text-foreground">Plazo de conservación de datos:</strong>{" "}
          Conservaremos sus datos mientras se mantenga el tratamiento y no solicite la
          supresión de los mismos.
        </li>
        <li>
          <strong className="text-foreground">Derechos:</strong> Podrá ejercitar los
          derechos de acceso, rectificación, supresión, limitación al tratamiento,
          oposición, portabilidad y derecho a no ser objeto de una decisión basada
          únicamente en el tratamiento automatizado, mediante comunicación escrita al
          domicilio indicado en el aviso legal y a revocar su consentimiento sin
          efectos retroactivos u oponerse a la recepción de comunicaciones comerciales
          publicitarias por email y otros medios de comunicación electrónica
          equivalente, enviando y a presentar una reclamación ante la Autoridad de
          control, en España, la Agencia Española de Protección de Datos.
        </li>
        <li>
          <strong className="text-foreground">
            Modificación de la política de privacidad:
          </strong>{" "}
          Nos reservamos el derecho a modificar su Política de Privacidad, de acuerdo a
          nuestro propio criterio, o motivado por un cambio doctrinal de la Autoridad
          competente en Protección de Datos, legislativo o jurisprudencial. El uso de
          la Web después de dichos cambios implicará la aceptación de éstos.
        </li>
        <li>
          <strong className="text-foreground">Legislación aplicable:</strong> Cualquier
          controversia que se derive del uso de este Site, será regida, interpretada y
          sometida de acuerdo con las leyes de España.
        </li>
      </ol>
    </LegalLayout>
  );
}
