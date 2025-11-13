import { AboutHero, AboutContent, AboutMetrics, TeamSection } from "~/components/nosotros";

export function meta() {
  return [
    { title: "Nosotros | MIT Consultores - Quiénes Somos" },
    { name: "description", content: "Conoce a MIT Consultores, despacho jurídico especializado en CDMX con experiencia en derecho corporativo, migratorio e intelectual. Nuestro equipo de abogados profesionales." },
  ];
}

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <AboutMetrics />
    </>
  );
}

