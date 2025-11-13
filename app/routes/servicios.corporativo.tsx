import { HeroCorporativo, ContentCorporativo, CardsCorporativo, CTACorporativo } from "~/components/servicios";

export function meta() {
  return [
    { title: "Derecho Corporativo | MIT Consultores" },
    { name: "description", content: "Asesoría integral en derecho corporativo: estructura legal, gobierno empresarial y operación. MIT Consultores especializada en soluciones legales para empresas en México." },
  ];
}

export default function CorporativoPage() {
  return (
    <div>
      <HeroCorporativo />
      <CardsCorporativo />
      <ContentCorporativo />
      <CTACorporativo />
    </div>
  );
}

