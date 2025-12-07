import { HeroHeadhunter, CardsHeadhunter, ContentHeadhunter, CtaHeadhunter } from "~/components/servicios";

export function meta() {
  return [
    { title: "Servicio de Head Hunter | MIT Consultores" },
    { name: "description", content: "Búsqueda especializada de talento y reclutamiento profesional. MIT Consultores ofrece servicios de Head Hunter con estudios de mercado y análisis de remuneraciones." },
  ];
}

export default function HeadhunterPage() {
  return (
    <div>
      <HeroHeadhunter />
      <CardsHeadhunter />
      <ContentHeadhunter />
      <CtaHeadhunter />
    </div>
  );
}
