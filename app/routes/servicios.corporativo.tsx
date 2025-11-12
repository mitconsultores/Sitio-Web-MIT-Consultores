import { HeroCorporativo, ContentCorporativo } from "~/components/servicios";

export function meta() {
  return [
    { title: "Derecho Corporativo - MIT Consultores" },
    { name: "description", content: "Soluciones integrales para la estructura, gobierno y operación de su empresa" },
  ];
}

export default function CorporativoPage() {
  return (
    <div>
      <HeroCorporativo />
      <ContentCorporativo />
    </div>
  );
}

