import { HeroPropiedadIntelectual, ContentPropiedadIntelectual, CardsPropiedadIntelectual, CTAPropiedadIntelectual, ProcessPropiedadIntelectual } from "~/components/servicios";

export function meta() {
  return [
    { title: "Propiedad Intelectual - MIT Consultores" },
    { name: "description", content: "Protección integral de sus activos intangibles y derechos de propiedad intelectual" },
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

