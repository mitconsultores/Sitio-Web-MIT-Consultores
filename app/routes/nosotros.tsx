import { AboutHero, AboutContent, AboutMetrics } from "~/components/nosotros";

export function meta() {
  return [
    { title: "Nosotros - MIT Consultores" },
    { name: "description", content: "Un distinguido despacho jurídico ubicado en el corazón de la Ciudad de México" },
  ];
}

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutMetrics />
    </>
  );
}

