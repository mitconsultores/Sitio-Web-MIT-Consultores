import { Hero, ServicesCards, HomeAbout, HomeCTA } from "~/components/inicio";

export function meta() {
  return [
    { title: "Inicio - MIT Consultores" },
    { name: "description", content: "Despacho jurídico especializado en derecho corporativo, migratorio y propiedad intelectual" },
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
