import { Hero, ServicesCards, HomeAbout, HomeCTA } from "~/components/inicio";

export function meta() {
  return [
    { title: "MIT Consultores | Despacho Jurídico Especializado" },
    { name: "description", content: "Despacho jurídico en México especializado en derecho corporativo, migratorio y propiedad intelectual. Asesoría legal profesional para empresas y personas." },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCards />
      <HomeAbout />
      <HomeCTA />
    </>
  );
}
