import { HeroPropiedadIntelectual, ContentPropiedadIntelectual, CardsPropiedadIntelectual, CTAPropiedadIntelectual, ProcessPropiedadIntelectual } from "~/components/servicios";

export function meta() {
  return [
    { title: "Propiedad Intelectual | MIT Consultores" },
    { name: "description", content: "Protección de derechos de propiedad intelectual: marcas, patentes, derechos de autor. MIT Consultores protege tus activos intangibles con asesoría legal especializada en México." },
  ];
}

export default function PropiedadIntelectualPage() {
  return (
    <div>
      <HeroPropiedadIntelectual />
      <CardsPropiedadIntelectual />
      <ContentPropiedadIntelectual />
      <ProcessPropiedadIntelectual />
      <CTAPropiedadIntelectual />
    </div>
  );
}

